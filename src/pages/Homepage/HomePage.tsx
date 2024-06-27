import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cources } from '../../modules/data';
import './HomePage.css';
import welcomeImage from '../../assets/ikonka.png'; // Путь к изображениюы

const Homepage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const newSection = document.querySelector('.new-section') as HTMLElement;
      const fixedButton = document.querySelector('.fixed-button') as HTMLElement;
      const scrollPosition = window.scrollY;
      const threshold = newSection?.offsetTop - window.innerHeight || 0;

      if (scrollPosition >= threshold) {
        fixedButton?.classList.add('show');
      } else {
        fixedButton?.classList.remove('show');
      }

      if (scrollPosition === 0) {
        fixedButton?.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Main Section with Background 1 */}
      <div className="main-section">
        <img src={welcomeImage} alt="Welcome Image" className="welcome-image" />
        <div className="main-header">
          <h1>Добро пожаловать на нашу платформу!</h1>
        </div>
      </div>

      {/* New Section to Appear on Scroll with Cards and Button */}
      <div className="new-section" id="new-section">
        <div className="new-section-content">
          <div className="album">
            <div className="container">
              <div className="row">
                {Cources.map((offer) => (
                  <div key={offer.id} className="card">
                    <h4><b>{offer.title}</b></h4>
                    <div className="linking">
                      <Link to={`/page_info/${offer.id}`} className="btn-link">Подробнее</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed button, initially hidden */}
      <a href="https://cs11.pikabu.ru/post_img/big/2020/04/18/6/1587203460178710714.png" target="_blank" rel="noopener noreferrer" className="fixed-button">
        Перейти на платформу
      </a>
    </div>
  );
};

export default Homepage;
