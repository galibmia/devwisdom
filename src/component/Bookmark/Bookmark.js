import React from 'react';
import "./Bookmark.css";

const Bookmark = ({ item }) => {
    return (
        <div className='container'>
            <h1 className='bookmark-text'>{item}</h1>
        </div>
    );
};

export default Bookmark;
