import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './shop.css';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className={`product ${props.view === 'list' ? 'product-list-item' : ''}`}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <div>
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
