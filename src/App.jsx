import { useEffect } from '@lynx-js/react'
import './App.css'
import Header from './components/header'
import NavigationDeck from './components/NavigationDeck'
export function App() {
  

  return (
    <view className='App'>
      <view className='Content'>
       <NavigationDeck/>
      </view>
    </view>
  )
}

