import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Flipkart Clone is an e-commerce platform for all your needs.</p>
        </div>

        <div className="footer-section">
          <h3>Customer Care</h3>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Flipkart Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
