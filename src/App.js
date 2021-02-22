import { useState } from "react";
import "./App.css";
import React from "react";
import CityInput from "./component/CityInput";
import Wheather from "./component/Wheather";
function App() {
  let [city, setCity] = useState("");
  const fetchWheatherData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/wheather?q=${city}&appid=9870badd0d1e410370775699a332bd1c`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result is ", result);
      })
      .catch((err) => {
        console.log("error has occured");
      });
  };
  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchWheatherData={fetchWheatherData}
      />
      <Wheather />
    </>
  );
}

export default App;
