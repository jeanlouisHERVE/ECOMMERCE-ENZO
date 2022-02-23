import React from 'react'
import {Link} from 'react-router-dom';
import './FloatingCart.css';
import cartIcon from './shopping-cart.svg';

export default function FloatingCart() {
  return (
    <Link to="shoppingCart">
      <div className='floating-cart'>
        <p>Votre Panier</p>
        <div className='img-notif-container'>
          <img src={cartIcon} alt="îcone" /> 
          <span className='notif'>0</span>
        </div>
      </div>
    </Link>
  )
}
