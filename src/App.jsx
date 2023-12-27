import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';



function App() {
  const [btnScroll,setBtnScroll]= useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(scrollY > 300){
        setBtnScroll(true)
      }else{
        setBtnScroll(false)
      }
    })
  })
  return (
    <div id='up' className='container'>
      <Header/>
      <Hero/>
      <div className='divider'/>
      <Main/>
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>

        <a className={btnScroll?'btn-scroll-up':'btn-scroll-up-no'} href="#up">
          <button className='icon-keyboard_arrow_up scroll-to-up'></button>
        </a>
      
    </div>
  )
}

export default App
