import React from 'react';
import './Home.css';
import image1 from '../../Assets/download (53).jpeg';

function Home() {
  return (
    <div className='all'>
      <div className='bio1'>
        <h1>Hello, I'm Emma Lee</h1>
      </div>
      <div className='image'>
        <img src={image1} className='photo' alt="Emma Lee" />
      </div>
      <div className='bio2'>
        <h1>A Frontend Developer Specialised in React</h1>
      </div>
    </div>
  );
}

export default Home;
