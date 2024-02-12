import React from 'react'
import { Carousel } from 'antd';
import { homepageBanner } from './homepageBanner';
import "./Banner.css"

function CarouselMain() {
       

  return (<>
    <div className='CaraouselContainer'>
    <div className='overText' >
    <p className='texthead text-7xl text-white font-semibold'>Fill Hunger</p>
    <p className='textPara text-slate-300 font-medium  text-2xl'>Best Taste Ever,fast delivary, with best quality</p> 
                
    </div>
        <Carousel autoplay>
        {homepageBanner.map((item)=>
            <div className='ImgContainer'>
           <img className='CarouselImg' src={item.image} alt='banner'/>
           </div>
           )}
    </Carousel>
    </div>
    </>)
}

export default CarouselMain
