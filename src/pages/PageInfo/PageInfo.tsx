import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cources } from '../../modules/data';
import './PageInfo.css'; // Подключаем стили для PageInfo

const PageInfo: React.FC = () => {
  const { processId } = useParams<{ processId: string }>(); // Получаем параметр processId из URL
  const courseId = parseInt(processId || '0', 10); // Преобразуем processId в число

  const course = Cources.find(item => item.id === courseId); // Находим курс по ID

  if (!course) {
    return <div>Invalid process ID</div>; // Обработка случая, если курс не найден
  }

  return (
    <div className="page-info">
      <Link to="/WelcomeCourceApp/" className="back-link">На главную</Link> {/* Кнопка "На главную" */}
      <div className="course-info">
        <h4>{course.title}</h4> {/* Заголовок карточки */}
        <div className="video-container">
          <iframe
            width="580"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>{course.description}</p> {/* Описание курса */}
      </div>
      <button className="fixed-button-2" onClick={() => window.location.href = 'https://cs11.pikabu.ru/post_img/big/2020/04/18/6/1587203460178710714.png'}>
        Перейти на платформу
      </button>
    </div>
  );
};

export default PageInfo;
