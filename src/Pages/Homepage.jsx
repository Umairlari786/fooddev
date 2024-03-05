import React from 'react'
import CarouselMain from '../Component/CarouselMain'
import Catalogmain from '../Component/Catalogmain'
import Starter from "../Component/Starter/starter"
import Maincourse from '../Component/MainCourse/maincourse'

function Homepage() {
  return (
    <div>
      <CarouselMain />
      <Catalogmain />
      <Starter />
      <Maincourse/>
    </div>
  )
}

export default Homepage
