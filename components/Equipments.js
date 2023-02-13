'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer, textVariant } from '../utils/motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

// import required modules
import {
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';
import { equipments } from '@/constants';

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
        className="font-normal lg:text-[70px] sm:text-[45px] text-[35px]  uppercase text-white tracking-wide mx-auto text-center"
      >
        Equipments
      </motion.h1>
      <motion.div
        variants={textVariant(1.1)}
        className=" md:w-[55rem] lg:w-[75rem] w-[20rem] h-[12rem] sm:w-[35rem] sm:h-[20rem] lg:h-[27rem] sliderShadow mx-auto mt-[3rem] mb-[20rem] sm:mb-[15rem] md:mb-[12rem] lg:mb-[3rem]"
      >
        <Swiper
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          // grabCursor={true}
          // navigation={true}
          // loop={true}
          // effect={'coverflow'}
          // slidesPerView={'auto'}
          // centeredSlides={true}
          // height={'auto'}
          // breakpoints={{
          //   600: {
          //     slidesPerView: '2',
          //     centeredSlides: true,
          //   },
          // }}
          // coverflowEffect={{
          //   slideShadows: false,
          //   rotate: 20,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          // }}
          // pagination={{ clickable: true }}
          // spaceBetween={0}
          // modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          // className="py-[3rem]"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          height={'auto'}
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Autoplay, Pagination, Navigation]}
          className="mySwiper md:w-[22rem] w-[16rem] md:h-[28rem] h-[22rem] top-10"
        >
          {equipments.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item} className={'overlfow-hidden rounded-sm'} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
