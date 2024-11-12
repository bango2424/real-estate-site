
import './App.css'
import Companies from './components/companies/Companies'
import Header from './components/header'
import Hero from './components/Hero/hero'
import Slider from './components/slider/slider'
import Value from './components/new-value/value'
import Contact from './components/Contact/Contact'
import Kimo from './components/kimo/kimo'



function App() {
 
  return (
   <div>
    <div>
     <div className='gradient'/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Slider/>
    <Value/>
    <Contact/>
    <Kimo/>    
   </div>
  )
}

export default App
