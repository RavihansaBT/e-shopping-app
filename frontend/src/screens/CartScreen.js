import React from 'react'
import { CartItem } from '../components/CartItem';
import './CartScreen.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Actions 
import { addToCart, removeFromCart } from "../redux/action/cartActions";

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const quentityChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const deleteFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartCountSum = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shoppping cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem key={item.product} item={item} quentityChangeHandler={quentityChangeHandler} deleteFromCart={deleteFromCart} />
                ))}


            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Sub total {getCartCount()} items</p>
                    <p>Rs.{getCartCountSum().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
