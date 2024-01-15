import React from 'react'
import Navbar from '../components/Home/Navbar'
import Herosection from '../components/Home/HeroSection'
import Service from '../components/Home/Service'
import Trusted from '../components/Home/Trusted'
import { useContext } from 'react'
import { AppContext } from '../Context/Productcontext'
import { useProductContext } from '../Context/Productcontext';
import FeatureProduct from '../components/Home/FeatureProduct'


function About() {

  const {myData} = useProductContext();

  return (
    <>
    
    
    <Herosection name="N-Ecommerce"/>
    <FeatureProduct/>
    <Service/>
    <Trusted/>
    
    </>
  )
}

export default About