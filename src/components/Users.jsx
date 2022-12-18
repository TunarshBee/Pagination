import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import Post from './Post'

export const Users = () => {
  const [posts, setpost] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(10)

  useEffect(() => {
    const fetchpost = async (e) =>{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setpost(res.data)
      setLoading(false)
    }
    fetchpost();
  }, [])

  

  const indexOfLastPage = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPage - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage)
  
  return (
    <div className='container' >
      <h1 className='text-primary mt-4' >List of Posts</h1>
        <Post posts={currentPosts} loading={loading}/>
        <Pagination postsperpage={postsPerPage} totalposts={posts.length}/>
    </div>
  )
}
