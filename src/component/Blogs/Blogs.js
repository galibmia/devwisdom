import React, { useEffect, useState } from 'react';
import "./Blogs.css"
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    
    return (
        <div className='blogs-container'>
            <div className='blog-container'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
            <div className='wish-list'>
                <div className='container'>
                    <h2 className='read-time'>Spent time on read : 0 min</h2>
                </div>
                <div className='container'>
                    <h1>Hello</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;