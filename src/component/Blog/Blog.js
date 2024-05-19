import React from 'react';
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog }) => {
    const { title, author, authorImg, banner, publishDate, readingTime, tags } = blog;
    console.log(banner)

    return (
        <div className='blog'>
            <img className='blog-banner' src={banner} alt="" />
            <div className='blog-author-info'>
                <div className='author-info'>
                    <img className='author-img' src={authorImg} alt="" />
                    <div>
                        <h6 className='author-name'>{author}</h6>
                        <p className='publishDate'>{publishDate}</p>
                    </div>
                </div>
                <div>
                    <p className='reading-time'>{readingTime} min read <button className='btn-bookmark'><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <div>
                <h1 className='blog-title'>{title}</h1>
                <p className='reading-time'>{tags}</p>
                <button className='btn-mark-read'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;