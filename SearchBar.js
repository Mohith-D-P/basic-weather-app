import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  // State to store the user's input
  const [location, setLocation] = useState('');

  // Event handler for handling user input changes
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  // Event handler for handling the search button click
  const handleSearchClick = () => {
    // Call the onSearch prop to trigger the search
    onSearch(location);
  };

  // Event handler for handling Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call the onSearch prop to trigger the search
      onSearch(location);
    }
  };

  return (
    <div className="search">
        <p className="my-custom-text">ENTER NAME OR ZIP-CODE BELOW!</p> 
      <input
        type="text"
        id="locationInput"
        placeholder="Enter location or zipcode"
        value={location}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button id="searchButton" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
