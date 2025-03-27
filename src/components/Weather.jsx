import React, { useState } from 'react';

const Weather = () => {
  // State for city input
  const [city, setCity] = useState('');

  // State for storing fetched weather data
  const [weather, setWeather] = useState(null);

  // State for error handling
  const [error, setError] = useState('');

  /**
   * Fetch latitude & longitude of the entered city.
   * @param {string} cityName - The name of the city to search for.
   * @returns {Promise<{lat: number, lon: number, cityName: string}>}
   */
  const fetchCoordinates = async (cityName) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        return {
          lat: data.results[0].latitude,
          lon: data.results[0].longitude,
          cityName: data.results[0].name, // Corrected city name
        };
      } else {
        throw new Error('City not found. Please enter a valid location.');
      }
    } catch (error) {
      throw new Error('Failed to fetch city coordinates.');
    }
  };

  //Fetch weather data using latitude & longitude.
  const fetchWeather = async () => {
    // Ensure city name is entered before fetching
    if (!city.trim()) {
      setError('Please enter a valid city name.');
      setWeather(null);
      return;
    }

    try {
      const { lat, lon, cityName } = await fetchCoordinates(city);

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await response.json();

      // Store fetched weather data
      setWeather({
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.windspeed,
        city: cityName, // Display corrected city name
      });

      setError(''); // Clear errors
    } catch (error) {
      setError(error.message); // Display error message
      setWeather(null);
    }
  };

  return (
    <div>
      {/* Input field for city name and button to fetch weather */}
      <div className="weather-input-interface">
        <input
          className="weather-input"
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather-submit-btn" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {/* Display error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display weather information if available */}
      {weather && (
        <div className="weather-container">
          <h3>Weather in {weather.city}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windSpeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
