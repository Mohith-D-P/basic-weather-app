import React, { useState, useEffect } from 'react';
import ForecastItem from './ForecastItem';
import './Forecast.css';

function Forecast({ location, apiKey }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
        const response = await fetch(forecastApiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const forecastList = data.list;

        // Group forecast data by date
        const groupedForecast = {};
        forecastList.forEach(item => {
          const forecastDate = new Date(item.dt * 1000).toDateString();
          if (!groupedForecast[forecastDate]) {
            groupedForecast[forecastDate] = item;
          }
        });

        // Convert the grouped forecast data into an array
        const forecastEntries = Object.values(groupedForecast);

        // Limit the forecast to the first 5 days
        const fiveDayForecast = forecastEntries.slice(0, 5);

        setForecastData(fiveDayForecast);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    if (location) {
      fetchForecastData();
    }
  }, [location, apiKey]);

  return (
    <div className="forecast">
      <h2>Next 5-Day Weather Forecast</h2>
      <div className="forecast-boxes">
        {forecastData.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Forecast;
