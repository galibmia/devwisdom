import React, { useEffect, useState } from 'react';
import "./Blogs.css";
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    // Check if there are any bookmarks in local storage
    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        if (storedBookmarks.length > 0) {
            setBookmarks(storedBookmarks);
            setIsVisible(true);
        }
    }, []);

    // Clear the bookmarks
    const clearBookmark = () => {
        localStorage.removeItem('bookmarks');
        setBookmarks([]);
        setIsVisible(false);
    };

    // Find the blog title based on the bookmarked blog ID
    const getBlogTitleById = (id) => {
        const blog = blogs.find(blog => blog.id === id);
        return blog ? blog.title : 'Unknown Title';
    };

    const readingTime = JSON.parse(localStorage.getItem('reading-time'));

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
            <div className='wish-list'>
                <div className='container'>
                    <h2 className='read-time'>Spent time on read : {readingTime} min</h2>
                </div>
                <div>
                    {bookmarks.map((id, index) => (
                        <Bookmark key={index} item={getBlogTitleById(id)} />
                    ))}
                </div>
                <div>
                    {isVisible && (
                        <button id='btn-clear' onClick={clearBookmark} className='btn-clear'>Clear Bookmark</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
