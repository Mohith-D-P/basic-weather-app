// Footer.js

import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Weather App</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
