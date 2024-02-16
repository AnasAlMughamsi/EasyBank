import './App.scss'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import LatestArticals from './components/LatestArticals/LatestArticals'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <LatestArticals/>
      <Footer/>
    </>
  )
}

export default App
