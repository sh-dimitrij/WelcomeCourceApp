import React from 'react';
import { Link } from 'react-router-dom';
import LightningIcon from '../../assets/moln.svg'; // Импортируйте иконку молнии
import './Cards.css';
import { splitTextIntoLines } from '../../utils/SplitTitle.ts';

interface Course {
    id: number,
    title: string
}

interface CardsProps {
  courses: Course[];
}

const Cards: React.FC<CardsProps> = ({ courses }) => {
  return (
    <>
      {courses.map((offer) => (
        <React.Fragment key={offer.id}>
          <div className="card-list-wrapper">
            <div className="card-header">
              <div className="course-label">Курс по олимпиаде</div>
              <div className="new-badge">
                <img src={LightningIcon} alt="lightbolt"/>
                <span>Новое</span>
              </div>
            </div>
            <div className='card-title'>{splitTextIntoLines(offer.title)[0]}</div>
            <div className='card-title'>{splitTextIntoLines(offer.title)[1]}</div>
              <Link to={`/WelcomeCourceApp/page_info/${offer.id}`} className="btn-link">Подробнее</Link>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Cards;
