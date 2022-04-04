import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReview] = useReview();
    return (
        <div className='reviews-container'>
            <h1>Customer Reviews</h1>
            <div className='customers-review'>
            {
                reviews.map(review=> <SingleReview
                    key={review.id}
                    review={review}
                ></SingleReview> )
            }
            </div>
        </div>
    );
};

export default Reviews;