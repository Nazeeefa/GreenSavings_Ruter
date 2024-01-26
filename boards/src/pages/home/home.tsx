import "./home.scss";
import React, {useEffect, useMemo} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import { IoCloudy } from "react-icons/io5";
import { IoIosAlert } from "react-icons/io";

const exampleData = [
    {
        stopName: "Oslo S",
        busName: "31",
        direction: "Snarøya",
        departureTime: "10:54",
        delay: "1 min"
    },
    {
        stopName: "Oslo S",
        busName: "32",
        direction: "Fornebu",
        departureTime: "10:59",
        delay: "6 min"
    },
    {
        stopName: "Oslo S",
        busName: "54",
        direction: "Kolsås",
        departureTime: "11:04",
        delay: "0 min"
    }
]

const locations = [
    {
        name: "Oslo S",
        latitude: 59.9109078,
        longitude: 10.7505334
    },
    {
        name: "Nationaltheatret",
        latitude: 59.9144439,
        longitude: 10.7341009
    },
    {
        name: "Oslo S",
        latitude: 59.9109078,
        longitude: 10.7505334
    }
]

const tSpeed = 0.005;

const MovingMarker = (props: {locations: {latitude: number, longitude: number}[]}) => {
    const [t, setT] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setT(t => t + tSpeed >= props.locations.length - 1 ? 0 : t + tSpeed);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    const location = useMemo(() => {
        const index = Math.floor(t);
        const t2 = t - index;
        const location1 = props.locations[index];
        const location2 = props.locations[index + 1];
        const latitude = location1.latitude + (location2.latitude - location1.latitude) * t2;
        const longitude = location1.longitude + (location2.longitude - location1.longitude) * t2;
        return {latitude, longitude};
    }, [t]);

    return (
        <Marker position={[location.latitude, location.longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )

}

/**
 * This component will render the home screen.
 * @param props The props:
 * - simId: The simulation ID.
 * @constructor
 */
const HomeScreen = (props: {}) => {
    const [t, setT] = React.useState(0);

    return (
        <div className={"home dark"}>
            <div className={"home-header"}>
                <div className={"announcement-section"}>
                    <IoIosAlert />
                    <div className={"announcement-scroller"}>
                        <span>It is very slippery. Please be careful when you are walking.</span>
                    </div>
                </div>
                <div className={"language-section"}>
                    <IoCloudy />
                    <span>Cloudy</span>
                    <span>-1°</span>
                </div>
            </div>
            <div className={"home-body"}>
                <div className={"departure-board"}>
                    {/*<img src={"/ruterwebsite.png"} />*/}
                    <div className={"departure-board-header"}>
                        <span className={"stop-name"}>Stop name</span>
                        <span className={"bus-name"}>Bus name</span>
                        <span className={"direction"}>Direction</span>
                        <span className={"departure-time"}>Departure Time</span>
                        <span className={"delay"}>Delay</span>
                    </div>
                    {
                        exampleData.map((data, index) => {
                            return (
                                <div className={"departure-board-row"} key={index}>
                                    <span className={"stop-name"}>{data.stopName}</span>
                                    <span className={"bus-name"}>{data.busName}</span>
                                    <span className={"direction"}>{data.direction}</span>
                                    <span className={"departure-time"}>{data.departureTime}</span>
                                    <span className={"delay"}>{data.delay}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"bus-location-board"}>
                    <MapContainer center={[locations[1].latitude, locations[1].longitude]} zoom={16} scrollWheelZoom={false} zoomControl={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                        />

                        <MovingMarker locations={locations} />

                    {/*  add some circles around center to indicate bikes  */}
                        <Marker position={[locations[1].latitude - 0.0001, locations[1].longitude - 0.00001]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                        <Marker position={[locations[1].latitude + 0.0001, locations[1].longitude + 0.00001]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                        <Marker position={[locations[1].latitude + 0.0003, locations[1].longitude + 0.001]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className={"maas-state-section"}>
                <span>Vehicles nearby:</span>
                <img src={"/tier.png"} />
                <span>6 scooters</span>
                <img src={"/voi.png"}/>
                <span>2 scooters</span>
                <img src={"/oslocitybike.png"} />
                <span>3 bikes</span>
                <img src={"/parkio.jpg"} />
                <span>3 carpool cars</span>
            </div>
            <div className={"home-footer"}>
                <div className={"weather-section"}>
                    <span>This house saved 4.3 t CO2 and 1 Million NOK this month using Ruter Bedrift</span>
                </div>
                <div className={"signup-section"}>
                    <span>Get a discounted Ruter ticket:</span>
                    <img src={"/qrcode.png"} />
                </div>
            </div>
        </div>
    )
}

/**
 * The home page
 * @constructor
 */
export const Home = () => {
    return (
        <HomeScreen />
    )
}