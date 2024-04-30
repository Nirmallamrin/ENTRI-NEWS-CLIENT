import React, { useState,useEffect } from "react"
import axios from 'axios'
import './Blogs.css'

const Blogs = () => {

    const [posts, setPost] = useState ([]);

    useEffect(()=>{
        const fetchData = async (req,res) => {
            try {
                const posts = await axios.get('https://entri-news-server.onrender.com/posts')
                setPost(posts.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    },[])
  return (
    <div className="gridContainer">
        {posts.map((post,index)=>(
            <div>
                <img className="blogImage"
                key={index}
                src={`https://entri-news-server.onrender.com/${post.image}`}
                />
                <p>{post.title}</p>
                <p>{post.subtitle}</p>
                <p>{post.desc}</p>
            </div>

        ))}
        
    </div>
  )
}

export default Blogs