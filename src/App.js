import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'Routes' from 'react-router-dom' 

import Home from './Home';
import ClearanceSale from './ClearanceSale';
import Categories from './Categories';
import UserAccount from './UserAccount';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clearance-sale" element={<ClearanceSale />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
