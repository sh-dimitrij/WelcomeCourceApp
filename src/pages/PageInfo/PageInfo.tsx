import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cources } from '../../modules/data';
import './PageInfo.css'; // Подключаем стили для PageInfo
import welcomeImage from '../../assets/ikonka.svg'; // Иконка

const PageInfo: React.FC = () => {
  const { processId } = useParams<{ processId: string }>(); // Получаем параметр processId из URL
  const courseId = parseInt(processId || '0', 10); // Преобразуем processId в число

  const course = Cources.find(item => item.id === courseId); // Находим курс по ID

  useEffect(() => {
    window.scrollTo(0, 0); // Сброс прокрутки на начало страницы
  }, []);

  if (!course) {
    return <div>Invalid process ID</div>; // Обработка случая, если курс не найден
  }

  return (
    <div className="page-info">
      <Link to="/WelcomeCourceApp/" className="back-link">На главную</Link> {/* Кнопка "На главную" */}
      <div className="course-info">
        <div className='info-h1'>узнай <b>как</b> поступить по <b>олимпиаде</b></div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='info-h1'>о курсе</div>
        <p>Академия финансовой грамотности собрала все важные темы по подготовке к перечневым олимпиадам. Наши ученики уже поступили на такие профили бакалавриата, как “Менеджмент”, “Управление персоналом”, “Бизнес-информатика” в самые престижные вузы страны.</p>
        <div className='info-h1'>хочешь также?</div>
        <p>Присоединяйся к 25-часовому полному курсу по подготовке. На курсе ты освоишь:</p>
        <p>(список тем)</p>
        <div className='info-h1'>стоимость</div>
        <p className="price">13500&#8381;</p> {/* Стоимость курса */}
      </div>
      <img src={welcomeImage} alt="Ikonka" className="ikonka" />
      <button className="platform-button" onClick={() => window.location.href = 'https://cs11.pikabu.ru/post_img/big/2020/04/18/6/1587203460178710714.png'}>
        Перейти на платформу
      </button>
    </div>
  );
};

export default PageInfo;
