
import React, { useEffect, useState } from 'react';
import '../App.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Parallax,Autoplay  } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/controller';


function SwiperCarousel() {


    SwiperCore.use([Autoplay, EffectFade, Parallax]);

    return (
        <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                // navigation
                                parallax
                                EffectFade="fade"
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                autoplay={{delay: 3000}}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                >
                                <SwiperSlide id="slider" >
                                    <img
                                    src={require("../images/biko.jpg")}
                                    alt="First slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/Haile3.jpeg")}
                                    alt="Second slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/CNA2.jpg")}
                                    alt="Third slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/Mandela3.jpg")}
                                    alt="Fourth slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/Fela1.jpg")}
                                    alt="Fifth slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/ngozi2.jpg")}
                                    alt="Sixth slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/Luther.jpg")}
                                    alt="Seventh slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/barack_obama2.jpg")}
                                    alt="Seventh slide"
                                    />
                                </SwiperSlide>
                                <SwiperSlide id="slider">
                                    <img
                                    src={require("../images/Kenneth-Kaunda.jpg")}
                                    alt="Seventh slide"
                                    />
                                </SwiperSlide>
                        </Swiper>
    );
  }
  
  export default SwiperCarousel;


                        
                        