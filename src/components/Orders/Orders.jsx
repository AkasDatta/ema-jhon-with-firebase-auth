import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
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
                    <div>From Orders</div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; 