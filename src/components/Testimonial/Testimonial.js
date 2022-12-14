import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {Data} from './Data'
import "./Testimonial.css"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <>
    <section className="testimonial container section">
                <h2 className="section__title">
                My clients say's</h2>
                <span className="section__subtitle">
                Testimonial
                </span>

                <Swiper className="testimonial__container mySwiper"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
        
                >
                    {Data.map(({id, image, title, description}) => {
                        return (
                            <SwiperSlide className='testimonial__card' key={id}>
                            <img src={image} alt="" className='testimonial__img'/>

                            <h3 className="testimonial__name">
                                {title}
                            </h3>
                            <p className="testimonial__description">{description}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
    </section>
    </>
  )
}

export default Testimonial