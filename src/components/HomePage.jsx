import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [filling, setFilling] = useState(false);

  const handleClick = () => {
    setFilling(true);
    setTimeout(() => setFilling(false), 4000); // Reset after animation duration
  };

  return (
    <view className="home-container" bindtap={handleClick}>
      <view className={`outer-border ${filling ? 'fill-border' : ''}`}>
        <view className='circle'>
          <text>circle</text>
        </view>
      </view>
    </view>
  );
};

export default HomePage;
