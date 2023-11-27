import React from 'react';
import { Link } from 'react-router-dom';
import ClearanceSale from './ClearanceSale';
import Categories from './Categories';
import UserAccount from './UserAccount';
import ShoppingCart from './ShoppingCart';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/clearance-sale">Clearance Sale</Link>
      </div>
      <div>
        <Link to="/categories">Categories</Link>
      </div>
      <div>
        <Link to="/user-account">User Account</Link>
      </div>
      <div>
        <Link to="/shopping-cart">Shopping Cart</Link>
      </div>
    </div>
  );
}

export default Home;
