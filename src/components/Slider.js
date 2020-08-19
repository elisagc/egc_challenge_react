import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import imgSlider from '../assets/images/slider_principal.jpg'

const Slider = () => {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      className="carousel"
    >
      <div>
        <img alt="" src={imgSlider} />
      </div>
      <div>
        <img alt="" src={imgSlider} />
      </div>
      <div>
        <img alt="" src={imgSlider} />
      </div>
    </Carousel>
  )
}

export default Slider
