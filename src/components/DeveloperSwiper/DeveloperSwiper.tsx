import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import './DeveloperSwiper.css'

interface Developer {
    id: number;
    name: string;
    role: string;
    contact: string;
    image: string;
}

interface DeveloperSwiperProps {
    developers: Developer[];
}

const DeveloperSwiper: React.FC<DeveloperSwiperProps> = ({ developers }) => {
    return (
      <Swiper
        modules = {[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{ draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {developers.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="developer-card">
            <img src={slide.image} alt={slide.name} className="developer-image" />
            <div className="developer-info">
              <h3 className="developer-name">{slide.name}</h3>
              <p className="developer-role">{slide.role}</p>
              <p className="developer-contact">{slide.contact}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default DeveloperSwiper