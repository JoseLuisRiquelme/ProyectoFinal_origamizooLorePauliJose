import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from "../images/slider1.png";
import slide2 from "../images/slider2.png";

const SliderHome = () => {
    const swiperStyle = {
        width: 'calc(100vw - 18px)',
        position: 'relative' 
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        color: '#332f30', 
        fontSize: '2em', 
        cursor: 'pointer', 
        zIndex: 2 
    };

    return (
        <div className='slider-container' style={swiperStyle}>
        <div className='slider-wrapper' style={swiperStyle}>
        <span style={{ ...arrowStyle, left: '10px' }}>&lt;</span>
        <span style={{ ...arrowStyle, right: '10px' }}>&gt;</span>
        <Swiper
            style={swiperStyle}
            spaceBetween={1}
            slidesPerView={1}
        >
            <SwiperSlide>
                <img src={slide1} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
            </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
}

export default SliderHome;
