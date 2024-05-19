import React, { useState } from 'react';
import "./Blog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const Blog = ({ blog }) => {
    const { id, title, author, authorImg, banner, publishDate, readingTime, tags } = blog;
    const addToBookmark = (ids) => {
        const value = localStorage.getItem(title);
        if( parseInt(value) !== ids){
            console.log(value, ids)
            localStorage.setItem(title, ids);
            toast.success('Added to Bookmark',{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
            setTimeout(()=>{
                window.location.reload();
            },1001);
        }
        else{
            toast.warn('Already Exist',{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        
    }

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
                    <p className='reading-time'>{readingTime} min read <button onClick={() => {addToBookmark(id)}}  className='btn-bookmark'><FontAwesomeIcon icon={faBookmark} /></button></p>
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