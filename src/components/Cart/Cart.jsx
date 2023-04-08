import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cart}) => { //added props to {cart} 
    // const cart = props.cart //option 1
    // const {cart} = props; //option 2 
    // console.log(cart);

    // const total = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        //harder solution
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        //
        product.quantity = product.quantity || 1; // shortcut solution
        
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button className='btn-clear-cart'><span>Clear cart</span> <FontAwesomeIcon className='clear-icon' icon={faTrashAlt} /></button>
            <button className='btn-review-cart'><span>Review Order</span> <FontAwesomeIcon className='review-icon' icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;