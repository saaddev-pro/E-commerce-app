import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header.jsx';
import ProductList from './productListe.jsx';
import Cart from './Cart.jsx';


function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://picsum.photos/150?random=1' },
    { id: 2, name: 'Product 2', price: 15, image: 'https://picsum.photos/150?random=2' },
    { id: 3, name: 'Product 3', price: 20, image: 'https://picsum.photos/150?random=3' },
  ];
    const [cart, setCart] = useState([]);
  
    const addToCart = (products) => {
      setCart([...cart, products]);
    };
  return (
    <Router>
    <Header />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
