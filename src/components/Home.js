import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home" id="home">
      <section className="hero">
        <div 
          className="hero-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 data-aos="fade-up" data-aos-delay="300">{t('hero.title')}</h1>
          <p data-aos="fade-up" data-aos-delay="500">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="welcome">
        <div className="container">
          <h2 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            {t('welcome.title')}
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            {t('welcome.description')}
          </p>
        </div>
      </section>


    </div>
  );
};

export default Home;
