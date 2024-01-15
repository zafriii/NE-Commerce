import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from '../Button';
import { NavLink} from "react-router-dom";
import './addtocart.css'


function CartAmountToggle({amount, setDecrease, setIncrease}) {

  return (
    <>
    
    <div className="cart-amount">

            <button className="plus" onClick={() => setDecrease()}>
                    <FaMinus />
            </button> 

            <div className="amount-no">{amount}</div>

            <button className="minus" onClick={() => setIncrease()}>
                    <FaPlus />
            </button>

    </div>

    {/* <div className="cart-btn">
    <NavLink to='/cart'> <Button  text='Add to cart'></Button></NavLink>
    </div> */}
    
    </>
  )
}

export default CartAmountToggle