import React from 'react'
import { topMeals } from './topMeals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function Catalogmain() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
      };
  return (
    <div className='CatalogContainer'>
        <div className='overText-topmeals' >
            <p className="topMeals">Top</p>        
        </div>

        <Slider className='SliderCss' {...settings}>
                {topMeals.map((item)=>
                     <div className='ImgContainer2'>
                            <img className='CarouselImg1' src={item.image} alt='banner'/>
                            <h1 className='dish-name '>{item.title}</h1>
                    </div>
           )}
           </Slider>
    </div>
  )
}

export default Catalogmain
