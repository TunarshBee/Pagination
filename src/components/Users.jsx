import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Post from './Post'

export const Users = () => {
  const [posts, setpost] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    const fetchpost = async (e) =>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setpost(res.data)
      setLoading(false)
    }
    fetchpost();
  }, [])

  

  const indexOfLastPage = currentPage * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage)
  
  return (
    <div className='container' >
      <h1 className='text-primary mt-4' >List of Posts</h1>
        <Post posts={currentPosts} loading={loading}/>
    </div>
  )
}
