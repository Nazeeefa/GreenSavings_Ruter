"use client";

import { useState, useEffect } from "react";
import { ExampleTrip } from "@/components/component/exampletrip";

interface Station {
  name: string;
  travel_mode: string;
}

export default function Home() {
  const [trip, setTrip] = useState<Station[]>([]);

  useEffect(() => {
    const getTrip = async () => {
      const response = await fetch("/api/get-trip");
      const data = await response.json();
      console.log(data);
      setTrip(data);
    };
    getTrip();
    console.log(trip);
  }, []);

  return ExampleTrip();
}
