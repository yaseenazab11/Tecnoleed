import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="row">
          <div className="contact-info" data-aos="fade-up">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>{t('contact.info.address.title')}</h3>
              <p>{t('contact.info.address.value')}</p>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>{t('contact.info.phone.title')}</h3>
              <p>{t('contact.info.phone.value')}</p>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>{t('contact.info.email.title')}</h3>
              <p>
                <a href={`mailto:${t('contact.info.email.value')}`} className="contact-link">
                  {t('contact.info.email.value')}
                </a>
              </p>
            </div>

            <div className="info-item">
              <i className="fas fa-clock"></i>
              <h3>{t('contact.info.hours.title')}</h3>
              <p>{t('contact.info.hours.value')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
