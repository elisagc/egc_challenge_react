import React from 'react'
import Slider from '../components/Slider'
import Ficha from '../components/Ficha'
import Post from '../components/Post'

const Home = (props) => {
  console.log(props)
  return (
    <div className="main-container">
      <Slider />
      <Ficha lang={props.location.search} />
      <Post></Post>
    </div>
  )
}

export default Home
