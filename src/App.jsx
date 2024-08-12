import React from 'react';
import Cart from './components/Cart.jsx';
import FlexContent from './components/FlexContent.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Sales from './components/Sales.jsx';
import Stories from './components/Stories.jsx';
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from './data/data.js';

const App = () => {
  return (
   <>
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;