import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='questions'>
            <div>
                <h2><span>Questions:</span> What is Context API?</h2>
                <p>Context Api is useful for sharing data from one component to other without prop drilling.It's a component structure provided by react library which enables us to share specific forms of data across all levels of the application. <br />
                By Context Api, we can pass not only a variable or hard coded form also pass function,state,array,object etc. <br />
                Eventually we can say , Context Api allows us to pass data through components tree . Giving our components the ability to communicate and share data at different levels....
                </p>
            </div>
            <div>
                <h2><span>Questions:</span> What is Semantic Tag?</h2>
                <p>HTML Semantic tags tell the browser how to display the content on the page. They give no indication as to what type of content they contain or what role that content plays in the page. <br />
                It addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on. <br />
                By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.
                </p>
            </div>
        </div>
    );
};

export default Blogs;