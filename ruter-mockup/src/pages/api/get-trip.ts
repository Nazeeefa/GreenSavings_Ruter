export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { body } = req;

        const { from, to } = body;

        const fromLongitude = from.longitude;
        const fromLatitude = from.latitude;
        const toLongitude = to.longitude;
        const toLatitude = to.latitude;

        const query = `
        query($fromLatitude: Float!, $fromLongitude: Float!, $toLatitude: Float!, $toLongitude: Float!, $dateTime: DateTime!)
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
    modes: {directMode: car_pickup, transportModes: []}
    arriveBy: false
  )
  {
    tripPatterns {
      expectedStartTime
      duration
      walkDistance
      legs {
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
        }

        const url = 'https://api.entur.io/journey-planner/v3/graphql';

        const reqBody = JSON.stringify({
            query,
            variables,
        })

        console.log(reqBody);

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

        const data = await response.json();

        res.status(200).json(data);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
