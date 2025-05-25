import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Root />);
