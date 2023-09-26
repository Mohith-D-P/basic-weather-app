import React from 'react';
import './TemperatureToggle.css';

function TemperatureToggle({ onUnitChange, selectedUnit }) {
  return (
    <div className="temperature-toggle">
      <label >
        <input
          type="radio"
          name="temperature-unit"
          value="celsius"
          checked={selectedUnit === 'celsius'}
          onChange={() => onUnitChange('celsius')}
          className="temperature-toggle-input" // Add this class for the radio button
        />
        Celsius
      </label>
      <label >
        <input
          type="radio"
          name="temperature-unit"
          value="fahrenheit"
          checked={selectedUnit === 'fahrenheit'}
          onChange={() => onUnitChange('fahrenheit')}
          className="temperature-toggle-input" // Add this class for the radio button
        />
        Fahrenheit
      </label>
    </div>
  );
}

export default TemperatureToggle;
