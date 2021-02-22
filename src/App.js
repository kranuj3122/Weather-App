import { useState } from "react";
import "./App.css";
import React from "react";
import CityInput from "./component/CityInput";
import Wheather from "./component/Weather";
function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  const fetchWeatherData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9870badd0d1e410370775699a332bd1c`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result is ", result);
        if (result.cod === "404") {
          alert(result.message);
        } else {
          setWeather(result);
        }
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
        fetchWeatherData={fetchWeatherData}
      />
      <Wheather cityWeather={weather} />
    </>
  );
}

export default App;
