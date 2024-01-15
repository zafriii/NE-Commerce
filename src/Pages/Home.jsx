import React from 'react'
import Navbar from '../components/Home/Navbar'
import Herosection from '../components/Home/HeroSection'
import Service from '../components/Home/Service'
import Trusted from '../components/Home/Trusted'
import FeatureProduct from '../components/Home/FeatureProduct'


function Home() {

  return (
    <>
     
     <Herosection name="N-Estore"/>
     <FeatureProduct/>
     <Service/> 
     <Trusted/>
     
    </>
  )
}

export default Home