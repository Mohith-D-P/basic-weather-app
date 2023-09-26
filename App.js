import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Forecast from './Forecast';
import ForecastItem from './ForecastItem';
import LoadingIndicator from './LoadingIndicator';
import TemperatureToggle from './TemperatureToggle';
import './App.css';
import Footer from './Footer';

function App() {
  // Set initial weather data (you can replace this with your desired data)
  const initialWeatherData = {
    name: 'Delhi',
    sys: { country: 'India' },
    main: { temp: 20 }, // Initial temperature in Celsius
    weather: [{ description: 'Partly Cloudy', icon: '01d' }],
  };

  // State variables for weather data, loading, and error handling
  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [forecastData, setForecastData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('celsius'); // Initialize with your default unit ('celsius' or 'fahrenheit')

  // Define your 'locationProp' and 'apiKey' here
  const locationProp = 'location';
  const apiKey = 'dd284780b9fd3bdf3474761e893e2441'; // Replace with your API key

  const handleTemperatureUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  // Function to fetch weather data based on the location
  const fetchWeatherData = (location) => {
    // Clear previous weather data and errors
    setWeatherData(null);
    setError(null);
    setLoading(true);

    // Your API key and URL for OpenWeatherMap
    const apiKey = 'dd284780b9fd3bdf3474761e893e2441'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the weatherData state with fetched data
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors by setting the error state
        setError(error.message);
        setLoading(false);
      });
  };

  // Function to handle the weather search
  const handleWeatherSearch = (location) => {
    fetchWeatherData(location);
  };

  // Implement geolocation and data fetching for weather and forecast data here
  // Update state variables (weatherData, forecastData, loading, error) accordingly

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="column">
          <SearchBar onSearch={handleWeatherSearch} />
          <div className='toggle-switches'>
          <TemperatureToggle
            onUnitChange={handleTemperatureUnitChange}
            selectedUnit={selectedUnit}
          />
          </div>
          </div>
        <div className="column">
          {loading ? <LoadingIndicator /> : <WeatherDisplay weatherData={weatherData} loading={loading} error={error} temperatureUnit={selectedUnit} />}
        </div>
      </div>
      
      <Forecast location={locationProp} apiKey={apiKey} />
      <ForecastItem />
      <Footer/>
    </div>
  );
}

export default App;
