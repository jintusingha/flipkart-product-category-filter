import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./FloatingCart.css";

const FloatingCart = () => {
  const { cart } = useCart(); // Access cart items
  const [isOpen, setIsOpen] = useState(false); // Track modal state

  return (
    <div>
      {/* Floating Cart Icon */}
      <div className="floating-cart" onClick={() => setIsOpen(!isOpen)}>
        🛒 <span className="cart-count">{cart.length}</span>
      </div>

      {/* Cart Modal */}
      {isOpen && (
        <div className="cart-modal">
          <h3>Cart Items</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
