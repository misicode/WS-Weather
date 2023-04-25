import { useState } from "react";

import {
  Alert,
  Footer,
  Forecast,
  FormatDate,
  Loader,
  SearchBar,
  WeatherInfo,
} from "../components";
import { useWeatherData } from "../hooks/useWeatherData";
import { Coordinates } from "../types";

import "./Weather.css";

type WeatherProps = {
  defaultCity: string;
  cardBackground: string;
};

const Weather = ({ defaultCity, cardBackground }: WeatherProps) => {
  const [city, setCity] = useState<string | number | Coordinates>(defaultCity);
  const weatherData = useWeatherData(city);

  const onChangeCity = ( newCity: string | number | Coordinates ) => {
    setCity(newCity);
  }

  if (weatherData) {
    return (
      <>
        <Alert />
        <div className={`card ${ cardBackground }`}>
          <section className="weather-today">
            <div className="content">
              <FormatDate date={ weatherData.date } />
              <WeatherInfo data={ weatherData } />
            </div>
          </section>
          <section className="weather-week">
            <div className="content full-height">
              <SearchBar onNewCity={ onChangeCity } />
              <Forecast coords={ weatherData.coordinates } />
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  } else {
    return <Loader />
  }
}

export default Weather;