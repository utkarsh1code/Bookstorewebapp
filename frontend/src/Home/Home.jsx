import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Freebook from '../components/Freebook'


function Home() {
  return (
    <>
    <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
    </>
  )
}

export default Home