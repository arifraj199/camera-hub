import React from 'react';
import img from '../../images/camera-01.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='products-container'>
            <div className="title-container">
                <h1>Find Best Camera From Us <br /> Build Your Goal on <span>Photography</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam, nam maxime soluta ex ab voluptates! Vero sed impedit esse? Sit temporibus sunt nemo, impedit commodi omnis voluptatibus sed obcaecati.</p>
                <button>LIVE DEMO</button>
            </div>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;