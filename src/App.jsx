import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import Error from './Pages/Error'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'
import Order from './Pages/Order'

function App() {
  

  return (
    <>
     
        <BrowserRouter>

        <Navbar/>
        
              <Routes>                

                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/products' element={<Products/>}/>
                  <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
                  <Route path='/order' element={<Order/>}/>
                  <Route path='*' element={<Error/>}/>                                    

              </Routes>

          <Footer/>      
        
        </BrowserRouter>

    </>
  )
}

export default App

