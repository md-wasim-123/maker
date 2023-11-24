import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import HerroSection from './components/HerroSection'
import Details from './components/Details'
import Work from './components/Work'
import Testi from './components/Testi'
import Timeline from './components/Timeline'
import Youtube from './components/Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HerroSection />
      <Details />
      <Timeline />
      <Work />
      <Testi />
      <Youtube />
    </>
  )
}

export default App
