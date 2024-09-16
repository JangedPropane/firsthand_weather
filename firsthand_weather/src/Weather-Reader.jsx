//Documentation
//https://open-meteo.com/en/docs

import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';

const params = {
  "latitude": 52.52,
  "longitude": 13.41,
  "hourly": "temperature_2m",
  "models": "gem_seamless"
};
const url = "https://api.open-meteo.com/v1/forecast";

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

  useEffect(() => {
    const fetchData = async () => {
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      // ... rest of your code to process the response and create weatherData

      setWeatherData(weatherData); // Update state with processed data
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  // ... (rest of your component JSX)

  return (
    <div>
      {/* Display weather data here, conditional rendering based on weatherData state */}
    </div>
  );
}

export default WeatherComponent;

//OpenWeather (Could Use)
//https://openweathermap.org/
