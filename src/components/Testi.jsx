import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { Keyboard, Navigation } from 'swiper/modules';
const Testi = () => {
  return (
    <div className='py-5 md:py-14'>
      <div className='flex items-center justify-around  flex-col-reverse '>
        <h4 className='text-2xl text-[#09324F] text-center md:text-start md:text-[2.5rem] font-bold leading-10 p-5 py-2 md:py-8'>SUCCESS STORIES</h4>
        <div className='h-1 w-28 bg-[#09324F] mx-auto rounded-sm m-3'></div>
      </div>
      <Swiper
        slidesPerView={1}
        slidesPerGroupSkip={1}
        grabCursor={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
          <h2 className='text-[10px] md:text-lg  py-3  font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?student" alt="" />
        </SwiperSlide>

        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
        <h2 className='text-[10px] md:text-lg  py-3  font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?computer" alt="" />
        </SwiperSlide>

        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
        <h2 className='text-[10px] md:text-lg  py-3  font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?college" alt="" />
        </SwiperSlide>

        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
        <h2 className='text-[10px] md:text-lg  py-3  font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?landscape" alt="" />
        </SwiperSlide>

        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
        <h2 className='text-[10px] md:text-lg  py-3  font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?resume" alt="" />
        </SwiperSlide>

        <SwiperSlide className='flex items-center justify-around  flex-col-reverse'>
          <h2 className='text-[10px] md:text-lg  py-3 font-medium'>COLLEGE NAME</h2>
          <img src="https://source.unsplash.com/random/1920x1080/?wallpaper" alt="" />
        </SwiperSlide>










      </Swiper>
    </div>
  )
}

export default Testi
