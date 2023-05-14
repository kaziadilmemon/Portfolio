import React from 'react';

const Services = () => {
  return (
    <div className='heading'>
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          {/* <img src={webDevImage} alt="Web Development" /> */}
          <h3>Web Development</h3>
          <p>We provide custom web development solutions for businesses of all sizes.</p>
        </div>
        <div className="service-card">
          {/* <img src={appDevImage} alt="App Development" /> */}
          <h3>App Development</h3>
          <p>We develop high-quality mobile apps for both iOS and Android platforms.</p>
        </div>
        {/* Add more service cards here... */}
        <div className="service-card">
            {/* <img src={digitalMarketingImage} alt="Digital Marketing" /> */}
          <h3>Digital marketing</h3>
            <p>We provide digital marketing solutions for businesses of all sizes.</p>
        </div>

        <div className="service-card">
            {/* <img src={seoImage} alt="SEO" /> */}
          <h3>SEO</h3>
            <p>We provide SEO solutions for businesses of all sizes.</p>
        </div>
           
        <div className="service-card">
            {/* <img src={seoImage} alt="SEO" /> */}
          <h3>Graphics Designer</h3>
            <p>I can provide you with visually appealing and attractive designs and help you with image editing, enhancing your existing photos, and creating high-quality illustrations to complement your content</p>
        </div>
    
        <div className="service-card">
            {/* <img src={seoImage} alt="SEO" /> */}
          <h3>Content Writing</h3>
            <p>As a technical writer, I am passionate about sharing my knowledge of information technology with a wider audience. I can write articles for various platforms such as blogs, newsletters, magazines.</p>
        </div>



      </div>
    </div>
  );
};

export default Services;
