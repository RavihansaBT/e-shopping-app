import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ imageUrl, name, price, discription, productId }) => {
    return (
        <div className="product">
            <img src={imageUrl}
                alt={name} />
            <div className="product__info">
                <p className="info__name">
                    {name}
                </p>
                <p className="info__description">
                    {discription.substring(0,50)}...
                </p>
                <p className="info__price">
                    Rs.{price}
                </p>
                <Link to={`/product/${productId}`} className="info__button">view</Link>
            </div>
        </div>
    )
}

export default Product
