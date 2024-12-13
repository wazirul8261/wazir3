import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              We provide top-notch services to help your business grow. Contact us for more details!
            </p>
          </div>
  
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@myservices.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Business Lane, City, Country</p>
          </div>
  
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MyServices. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
export default Footer
