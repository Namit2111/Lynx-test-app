import React, { useState, useCallback } from '@lynx-js/react';
import './NavigationDeck.css';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import CustomPlanPage from './CustomPlanPage';
import LeaderboardPage from './LeaderBoardPage';

const NavigationDeck = () => {
  const [active, setActive] = useState('Home');
  
  const handleTap = useCallback((button) => {
    'background only';
    setActive(button);
  }, []);
  
  return (
    <>
      {active === 'Home' && <HomePage />}
      {active === 'Settings' && <SettingsPage />}
      {active === 'Plan' && <CustomPlanPage />}
      {active === 'Ranking' && <LeaderboardPage />}
      
      <view className='navigation-deck'>
        {['Home', 'Plan', 'Ranking', 'Settings'].map((item) => (
          <view
            key={item}
            className={`nav-button ${active === item ? 'active' : ''}`}
            bindtap={() => handleTap(item)}
          >
            <text className="nav-icon">
              {item === 'Home' ? '🏠' :
               item === 'Settings' ? '⚙️' :
               item === 'Plan' ? '📝' :
               item === 'Ranking' ? '🏆' : '○'}
            </text>
            <text className="nav-label">{item}</text>
          </view>
        ))}
      </view>
    </>
  );
};

export default NavigationDeck;