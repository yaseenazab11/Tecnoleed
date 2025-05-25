import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          {t('about.mainTitle')}
        </h2>

        <div className="about-content">
          <div className="who-we-are" data-aos="fade-up">
            <h3>{t('about.whoWeAre.title')}</h3>
            <p>{t('about.whoWeAre.description')}</p>
          </div>

          <div className="our-mission" data-aos="fade-up" data-aos-delay="200">
            <h3>{t('about.mission.title')}</h3>
            <p>{t('about.mission.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
