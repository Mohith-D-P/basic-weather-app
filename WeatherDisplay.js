import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData, loading, error, temperatureUnit }) => {
  // Check for loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check for error state
  if (error) {
    return (
      <div className="weather-info">
        <div className="error-pop-up">
        Oops! There Might Be an Error: OR Location Doesn't Exist!!..Please Try Again !
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  // Check if weatherData is available
  if (!weatherData) {
    return null; // If weatherData is not available yet, don't render anything
  }

  const { name, sys, main, weather } = weatherData;
  const temperatureCelsius = main.temp;
  const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
  const description = weather[0].description;
  const weatherIconCode = weather[0].icon;

  return (
    <div className="weather-info">
      <h2>Weather in {name}, {sys.country}</h2>
      {temperatureUnit === 'celsius' ? (
        <p>Celsius: {temperatureCelsius.toFixed(2)}°C</p>
      ) : (
        <p>Fahrenheit: {temperatureFahrenheit.toFixed(2)}°F</p>
      )}
      <p>Description: {description}</p>
      <img src={`https://openweathermap.org/img/w/${weatherIconCode}.png`} alt="Weather icon" />
    </div>
  );
};

export default WeatherDisplay;
