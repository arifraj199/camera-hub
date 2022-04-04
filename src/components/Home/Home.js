import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import img from '../../images/camera-01.jpg';
import SingleReview from '../SingleReview/SingleReview';
import './Home.css';

const Home = () => {
    const [reviews,setReview] = useReview();
    const navigate = useNavigate();
    return (
        <div>
            <div className='products-container'>
            <div className="title-container">
                <h1>Find Best Camera From Us <br /> Build Your Goal on <span>Photography</span></h1>
                <p>To set goal on Photography you need best camera.We give you a best performing camera with super ultra lense.Get your scene on your hand.Do something for reached your goal and fullfil your dream.</p>
                <button>LIVE DEMO</button>
            </div>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
        </div>
        <div className='reviews-container'>
            <h1>Customers Reviews</h1>
            <div className='customers-review'>
            
            {
                reviews.slice(0,3).map(review=> <SingleReview
                    key={review.id}
                    review={review}
                ></SingleReview> )
            }
            </div>
            <button onClick={()=> navigate('/reviews')}>See All Reviews</button>
        </div>
    </div>
    );
};

export default Home;