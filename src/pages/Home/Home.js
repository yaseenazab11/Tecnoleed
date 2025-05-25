import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>TECNOLEED</h1>
          <p>Your Trusted Partner in Agricultural Exports</p>
        </div>
      </section>

      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Tecnoleed</h2>
          <p className="welcome-text">
            We are committed to delivering the highest quality agricultural products with exceptional service to meet all your needs.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>
                Tecnoleed is a leading agricultural export company dedicated to providing premium products to global markets.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission is to connect farmers with international markets by providing premium agricultural products while maintaining the highest standards of quality and sustainability.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>Quality Excellence</li>
                <li>Customer Satisfaction</li>
                <li>Global Standards</li>
                <li>Sustainable Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
