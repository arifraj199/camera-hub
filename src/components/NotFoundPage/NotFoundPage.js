import React from 'react';
import img from '../../images/404_page_not_found.jpg';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className='page-not-found'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFoundPage;