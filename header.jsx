
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-3">
    {/* Site Title on the Left */}
    <Link to="/" className="navbar-brand" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
      My E-commerce Site
    </Link>

    {/* Cart Link in the Center */}
    <div className="m-3">
      <Link to="/cart" className="nav-link text-white" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Cart
      </Link>
    </div>
  </nav>
</header>
);

export default Header;
