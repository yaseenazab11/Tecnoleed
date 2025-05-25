import React from 'react';
import { useTranslation } from 'react-i18next';
import './Products.css';

// Import images
import medjoolImg from '../assets/images/medjool.jpg';
import oliveOilImg from '../assets/images/olive oil.jpg';
import strawberryImg from '../assets/images/frozen strawberry.jpg';
import tomatoPasteImg from '../assets/images/tomato paste.jpg';

const productTypes = ['dates', 'oliveOil', 'strawberry', 'tomatoPaste'];

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          {t('products.title')}
        </h2>
        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          {t('products.description')}
        </p>

        <div className="products-grid">
          {productTypes.map((productType, index) => (
            <div
              key={productType}
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="product-image">
                <img 
                  src={productType === 'dates' ? medjoolImg :
                      productType === 'oliveOil' ? oliveOilImg :
                      productType === 'strawberry' ? strawberryImg :
                      tomatoPasteImg
                  } 
                  alt={t(`products.items.${productType}.title`)}
                />
              </div>
              <div className="product-content">
                <h3>{t(`products.items.${productType}.title`)}</h3>
                <p className="product-description">
                  {t(`products.items.${productType}.description`)}
                </p>
                <div className="product-features">
                  <h4>{t('products.features.title')}:</h4>
                  <ul>
                    {[0, 1, 2].map((featureIndex) => (
                      <li key={featureIndex}>
                        {t(`products.items.${productType}.features.${featureIndex}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
