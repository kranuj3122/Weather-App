import React, { useEffect, useState } from "react";
import "./style.css";
const Weather = ({ cityWeather }) => {
  let [render, setRender] = useState(false);
  let [tempr, setTempr] = useState("");
  let [humidity, setHumidity] = useState("");
  let [_cityWeather, setCityWeather] = useState("");
  let [wind_speed, setWindSpeed] = useState("");
  function Change() {
    if (Object.keys(cityWeather).length > 1) {
      setTempr(Math.floor(Number(cityWeather.main.temp) - 273.15));
      setHumidity(cityWeather.main.humidity);
      setCityWeather(cityWeather.weather[0].main);
      setWindSpeed(cityWeather.wind.speed);
      setRender(true);
    }
  }
  useEffect(() => {
    Change();
  }, [cityWeather]);
  return (
    render && (
      <div className="data">
        <h3>
          weather:
          <i>{" " + _cityWeather}</i>
        </h3>
        <h3>
          Temperature:
          <i>{" " + tempr} degree celcius</i>
        </h3>
        <h3>
          Humidity:
          <i>{" " + humidity}</i>
        </h3>

        <h3>
          Wind-Speed:
          <i>
            {" " + wind_speed}
            m/s
          </i>
        </h3>
      </div>
    )
  );
};

export default Weather;
