import { fetchData } from '../assets/data/dataPosts'
import React, { useEffect, useState } from 'react'

const Post = () => {
  const [postData, setPostData] = useState()

  useEffect(() => {
    fetchData().then((data) => setPostData(data))
  })

  const data = () => {
    return postData.posts.map((post) => (
      <a href={post.url} className="item" key={post._id}>
        <div className="item-img">
          <img src={post.image || post.banner_image_id_url} alt="" />
        </div>

        <div className="item-info">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </a>
    ))
  }

  return (
    <>
      <h1 className="title">NUESTROS POSTS</h1>
      <div className="posts-container">{postData ? data() : null}</div>
    </>
  )
}

export default Post
