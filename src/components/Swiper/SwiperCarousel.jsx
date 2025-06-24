import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SwiperCarousel.css';

const SwiperCarousel = () => {
  return (
    <section>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          thresholdDelta: 70,
        }}
        spaceBetween={60}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide--one">
          {/* Content for slide one */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide--two">
          {/* Content for slide two */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide--three">
          {/* Content for slide three */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide--four">
          {/* Content for slide four */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide--five">
          {/* Content for slide five */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperCarousel;