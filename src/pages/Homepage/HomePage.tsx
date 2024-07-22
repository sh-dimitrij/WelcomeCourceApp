import React, { useEffect, useState } from 'react';
import { Cources } from '../../modules/data'; // Убедитесь, что путь правильный
import './HomePage.css';
import logo from '../../assets/logo.svg';
import fingram from '../../assets/ak-fin-gram.svg';
import DeveloperSwiper from '../../components/DeveloperSwiper/DeveloperSwiper.tsx';
import { developers } from '../../modules/developers.ts'; 
import Cards from '../../components/Cards/Cards.tsx'


const Homepage: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newSection = document.querySelector('.new-section') as HTMLElement;
      const mainSection = document.querySelector('.main-section') as HTMLElement;

      if (!newSection || !mainSection) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const newSectionTop = newSection.getBoundingClientRect().top + scrollPosition;

      // Логика затемнения главной секции
      const distanceToNewSection = Math.max(0, newSectionTop - scrollPosition);
      const maxOpacityDistance = viewportHeight; // Максимальное расстояние для максимального затемнения
      const opacity = Math.min(1, 1 - (distanceToNewSection / maxOpacityDistance));

      // Обновляем стиль псевдоэлемента ::after
      mainSection.style.setProperty('--main-section-darkness', `rgba(0, 0, 0, ${opacity})`);

      // Логика показа кнопки
      if (scrollPosition + viewportHeight > newSectionTop * 1.1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Главная секция */}
      <div className="main-section">
        <img src={logo} alt="Logo" className="welcome-image" />
        <img src={fingram} alt="Academy Fin Gram" className="afg" />
      </div>

      {/* Новая секция */}
      <div className="new-section">
        <div className="new-section-header">
          <>Поступи на бюджет в топовый вуз!</>
        </div>
        <div className="new-section-content">
          <div className="album">
            <div className="container">
              <div className="row">
                <Cards courses={Cources} />
              </div>
            </div>
          </div>
        </div>

        

        <div className="new-section-footer">
          <>о нас</>
        </div>
        {/* Слайдер разработчиков */}
        <div>
          <DeveloperSwiper developers={developers} />
        </div>
      <div className='entering'></div>
      </div>
      <a href="https://cs11.pikabu.ru/post_img/big/2020/04/18/6/1587203460178710714.png" target="_blank" rel="noopener noreferrer" className={`fixed-button ${showButton ? 'show' : ''}`}>
        Перейти на платформу
      </a>
    </div>
  );
};

export default Homepage;
