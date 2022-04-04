import React from 'react';
import './SingleReview.css';

const SingleReview = (props) => {
    const {name,ratings,description,picture} = props.review;
    return (
        <div className='single-review'>
           <img src={picture} alt="" />
           <h2>{name}</h2>
           <p>{description}</p>
           <p><small className='ratings'>Ratings: {ratings}</small></p> 
        </div>
    );
};

export default SingleReview;