import React, { useEffect, useState } from 'react';
import "./Blogs.css"
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (localStorage.length > 0) {
            setIsVisible(true);
        }
    }, []);
    const clearBookmark = () => {
        localStorage.clear();
        setIsVisible(false);

    }


    let keys = []
        for (let i = 0; i < localStorage.length; i++) {
            // Get the key at index i
            const key = localStorage.key(i);
            keys = [...keys, key];
        }
    
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
                <div>
                    {
                        keys.map((item, index) =>  (
                            <Bookmark key={index} item={item} />
                        ))
                    }
                </div>
                <div>
                    {
                    isVisible &&
                    <button id='btn-clear' onClick={clearBookmark} className='btn-clear'>Clear Bookmark</button>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;