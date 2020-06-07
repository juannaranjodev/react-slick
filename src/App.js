import React from 'react';
import './App.css';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './App2.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
  'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1547297435-0483b27f42e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500',
  'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500'
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyloading: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

function App() {
  return (
    <div className="App">
      <div className={styles.root}>
        <h2 className={styles.title}> Images with blur effect</h2>
        <Slider {...settings}>
          {images.map(item => (
            <div className={styles.oneItem}>
              <LazyLoadImage
                width={'100%'}
                threshold={300}
                className={styles.itemImage}
                effect='blur'
                src={item}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
