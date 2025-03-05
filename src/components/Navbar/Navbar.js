import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">Flipkart Clone</div>

        
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more" />
          <button><FaSearch /></button>
        </div>

       
        <div className="nav-icons">
          <Link to="/products" className="nav-item">Products</Link>  
          <div className="nav-item"><FaUser /> Login</div>
          <div className="nav-item"><FaShoppingCart /> Cart</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
