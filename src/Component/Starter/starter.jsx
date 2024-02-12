import React from 'react'
import './Starter.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import {starterData} from './starterData'
import {sliderSettings} from './sliderSettings'
 
const starter = () => {
  return (
    <div className='r-wrapper'>
    <div className='inner-width paddings r-container'>
    <div className='r-head flexColStart'>
        <span className='orangeText'>Best Choices</span>
        <span className='Text'>Popular Starter</span>
    </div>
    </div>

    <Swiper {...sliderSettings}>
         <SliderButtons />
            {
                starterData.map((card , i)=> (
                    <SwiperSlide key={i}>
                        <div className='flexColStart r-card'>
                         <img src={card.image} alt='home'></img>

                         <span className='secondaryText r-price'>
                            <span style={{color:"orange"}}>🧭</span>
                         <span>{card.away}</span>
                         </span>

                         <span className='primaryText'>{card.name}</span>
                         <span className='secondaryText'>{card.detail}</span>
                        </div>                    
                    </SwiperSlide>
                ))
            }        
        </Swiper>
      
    </div>
  )
}

export default starter

const SliderButtons =() =>{
    const swiper = useSwiper();
    return(
        <div className='flexCenter r-buttons'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
