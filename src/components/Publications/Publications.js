import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../pages/style.css';

function Publications() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // this is Adil's medium API
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaziadilmemon702')
      .then(response => {
        const parsedArticles = response.data.items.map(item => {
          return {
            title: item.title,
            image: item.thumbnail,
            link: item.link,
            pubDate: Moment(item.pubDate).format('MMMM Do, YYYY')
          };
        });
        setArticles(parsedArticles);
      })
      .catch(error => console.log(error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1
    },
  };

  return (
    <div className="publications">
      <h2>Publications</h2>
      <Carousel responsive={responsive}>
        {articles.map(article => (
          <div className="publication-card" key={article.link}>
            <div className="publication-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="publication-content">
              <h3 className="publication-title">{article.title}</h3>
              <p className="publication-date">{article.pubDate}</p>
              <a className="publication-link" href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Publications;


