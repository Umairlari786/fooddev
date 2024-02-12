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
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          },
          {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
              }
          }
  
    ]
  
      };
  return (
    <div className='CatalogContainer'>
        <div className='overText-topmeals' >
            <p className="topMeals">Top</p>        
        </div>

        <Slider className='SliderCss space' {...settings}>
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
