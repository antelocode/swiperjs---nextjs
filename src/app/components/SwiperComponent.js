'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='w-[80%]'
      loop={true}
      modules={[Pagination, Navigation]}
      style={{
        '--swiper-navigation-color': '#ffffff', 
        '--swiper-pagination-color': '#ffffff', 
        '--swiper-pagination-bottom': '0px'
        }}
    >
      <SwiperSlide>
        <Image src="/img/img-1.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/img-2.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/img-3.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/img-4.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/img-5.jpg" width={300} height={200} layout='responsive'/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
