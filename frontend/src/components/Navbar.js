import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getcartItem = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }
    
    return (
        <nav className='navbar'>
            {/* logo */}
            <div className="navbar__logo">
                <h2>e-Shopping cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className="cart__link">
                        {/* icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        <span className="cartlogo__badge">{getcartItem()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamberger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
