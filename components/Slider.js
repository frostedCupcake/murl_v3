'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer, textVariant } from '../utils/motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

const Slider = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto"
    >
      <motion.h1
        variants={textVariant(1.1)}
        className="font-normal lg:text-[70px] sm:text-[45px] text-[40px]  uppercase text-white tracking-wide mx-auto text-center"
      >
        Equipments
      </motion.h1>
      <motion.div
        variants={textVariant(1.1)}
        className=" md:w-[55rem] lg:w-[65rem] w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] lg:h-[27rem] sliderShadow mx-auto my-[8rem]"
      >
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          navigation={true}
          loop={true}
          effect={'coverflow'}
          slidesPerView={'auto'}
          centeredSlides={true}
          height={'auto'}
          breakpoints={{
            600: {
              slidesPerView: '2',
              centeredSlides: true,
            },
          }}
          coverflowEffect={{
            slideShadows: false,
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="py-[3rem]"
        >
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg"
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
