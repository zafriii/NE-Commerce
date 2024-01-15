import React from 'react'
import { NavLink} from "react-router-dom";
import './hero.css'
import Button from '../Button';


function Herosection(props) {
    
    
  return (
    <>
    
    <div className="container">

            <div className="hero-section-data">

                    <h3>Welcome to</h3>
                    <h1>{props.name}</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias</p>
                    <p>atque temporibus</p>
                    <p> veniam doloribus libero ad error omnis voluptates
                     animi! Suscipit sapiente.</p>
                   
                    <NavLink to='/products'>
                    <Button text='shop now'></Button>
                    </NavLink>        
            
            </div>


            <div className="hero-section-image">
                    <img src='images/store.jpg'/>
            </div>

    </div>
    
    
    </>
  )
}

export default Herosection