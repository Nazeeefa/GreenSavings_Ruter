const PT_30DAY_CARD_COST = 850
const PT_SINGLE_TICKET_COST = 36

const AVG_G_CO2_PER_KM_CAR = 64
const AVG_G_CO2_PER_KM_PT = 22

const AVG_COST_PER_KM_CAR = 10.24
const AVG_COST_PER_KM_PT = 0.8

const AVG_NO_OF_TRIPS_PER_DAY = 3.29
const AVG_DISTANCE_TRAVELED_PER_DAY = 33.6
const AVG_DISTANCE_PER_TRIP = 10.2

const TIME_SPENT_PARKING_S = 390  // 6.5 Minutes

const route = async (fromLongitude, fromLatitude, toLongitude, toLatitude, mode: "car" | "transit") => {
    const query = `
        query($fromLatitude: Float!, $fromLongitude: Float!, $toLatitude: Float!, $toLongitude: Float!, $dateTime: DateTime!, $directMode: StreetMode!)
        {
  trip(
    from: {
      coordinates: {
        latitude: $fromLatitude
        longitude: $fromLongitude
      }
    }
    to: {
    coordinates: {
        latitude: $toLatitude
        longitude: $toLongitude
        }
    }
    numTripPatterns: 3
    dateTime: $dateTime
    walkSpeed: 1.3
    modes:{accessMode:foot, egressMode:foot, directMode:$directMode}
    arriveBy: false
  )
  {
            tripPatterns {
              duration
              walkDistance
              legs {
                expectedStartTime
                expectedEndTime
                mode
                distance
                line {
                  id
                  publicCode
                }
              }
            }
          }
}
`
    const dateTime = new Date().toISOString();

    const variables = {
        fromLatitude,
        fromLongitude,
        toLatitude,
        toLongitude,
        dateTime,
        directMode: mode === "car" ? "car_pickup" : "flexible",
    }

    const url = 'https://api.entur.io/journey-planner/v3/graphql';

    const reqBody = JSON.stringify({
        query,
        variables,
    })

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ET-Client-Name': 'ruter-mockup',
            'ET-Client-ID': 'ruter-mockup',
        },
        body: reqBody,
    };

    const response = await fetch(url, options);

    return await response.json();
}


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {body} = req;
        const {from, to, hasMonthlyCard} = body;

        const carData = await route(from.longitude, from.latitude, to.longitude, to.latitude, 'car');
        const transitData = await route(from.longitude, from.latitude, to.longitude, to.latitude, 'transit');

        const relevantTransitData = transitData.data.trip.tripPatterns;

        const carDistanceKm = carData.data.trip.tripPatterns[0].legs.filter((leg) => leg.mode === 'car').reduce((acc, leg) => acc + leg.distance, 0) / 1000;
        const carTravelTime = carData.data.trip.tripPatterns[0].duration;

        const carCost = carDistanceKm * AVG_COST_PER_KM_CAR;
        const carCo2g = carDistanceKm * AVG_G_CO2_PER_KM_CAR;

        let PT_cost = PT_SINGLE_TICKET_COST;
        if (hasMonthlyCard) {
            const tripsPerMonth = AVG_NO_OF_TRIPS_PER_DAY * (365.24/12)
            PT_cost = PT_30DAY_CARD_COST / tripsPerMonth;
        }

        const out = relevantTransitData.map((tripPattern) => {
            const ptDistanceKm = tripPattern.legs.filter((leg) => leg.mode !== 'car' && leg.mode !== "foot").reduce((acc, leg) => acc + leg.distance, 0) / 1000;
            const ptTravelTime = tripPattern.duration;

            const ptCo2g = ptDistanceKm * AVG_G_CO2_PER_KM_PT;

            const durationEqualToCar = ptTravelTime <= carTravelTime + TIME_SPENT_PARKING_S;
            const moneySaved = Math.round(carCost - PT_cost);
            const co2Saved = Math.round(carCo2g - ptCo2g);
            const durationSaved = Math.round(carTravelTime - ptTravelTime);
            const distanceSaved = Math.round(carDistanceKm - ptDistanceKm);

            return {
                durationEqualToCar,
                moneySaved,
                co2Saved,
                durationSaved,
                distanceSaved,
                ptTravelTime,
                ptDistanceKm,
                trip: tripPattern,
            }
        })

        res.status(200).json(out);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
