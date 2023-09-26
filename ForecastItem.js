import React from 'react';
import './ForecastItem.css';

function ForecastItem({ data }) {

  // Check if the required properties are available in the data object
  if (!data || !data.dt || !data.main || !data.weather) {
    return null; // Return nothing or an error message if data is missing
  }

  // Access data properties
  const { dt, main, weather } = data;

  // Extract relevant data from the properties
  const date = new Date(dt * 1000); // Convert timestamp to date
  const temperature = main.temp;
  const description = weather[0].description;


  return (
    <li className="forecast-box">
      <p>Date: {date.toLocaleDateString()}</p>
      <p>Temperature: {temperature.toFixed(2)}°C</p>
      <p>Description: {description}</p>
    </li>
  );
}

export default ForecastItem;
