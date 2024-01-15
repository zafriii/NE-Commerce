import React from 'react'

function CartReducer(state, action) {

    if(action.type ===  "ADD_TO_CART"){
       
        let {id, color, amount, product} = action.payload;

        console.log(product)


        let cartProduct ;

        cartProduct = {
            id: id + color,
            name : product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock
        }

        if(state.cart == null) {
            return {
              ...state, 
              cart: []
            }
          }


        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }        

    }

    if(action.type === "REMOVE_ITEM" && state.cart != null){

        let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)

        return {
            ...state,
            cart: updatedCart
        }  
    }

    if(action.type === "CART_TOTAL_ITEM" && state.cart != null){
        let updatedValue = state.cart.reduce((initialVal, curElem) => {
            let {amount} = curElem;
            initialVal = initialVal + amount;
            return initialVal;
        }, 0)

        return {
            ...state,
            total_item: updatedValue
        }

    }

    if(action.type === "CART_TOTAL_PRICE" && state.cart != null){
        let total_price = state.cart.reduce((initialVal, curElem) => {
            let {price, amount} = curElem;
            initialVal = initialVal + (price* amount);
            return initialVal;
        }, 0)

        return {
            ...state,
            total_price: total_price
        }
    }



  return state;
}

export default CartReducer


