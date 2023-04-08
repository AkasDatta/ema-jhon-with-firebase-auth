import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    // console.log(savedCart);

    const handleRemoveToCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        // console.log(id);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        // console.log(handleClearCart);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveToCart = {handleRemoveToCart}
                    ></ReviewItem>)
                } 
            </div>
            <div className='cart-container'>
                <Cart 
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/Checkout">
                        <button className='btn-proceed'><span>Proceed Checkout</span> <FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; 