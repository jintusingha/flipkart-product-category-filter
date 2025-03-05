import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import FloatingCart from "../components/Cart/FloatingCart"; 
import "./ProductListing.css";

const allProducts = [
  { id: 1, name: "Smartphone", price: 12999, rating: 4.5, category: "Electronics", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 45999, rating: 4.7, category: "Electronics", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 1999, rating: 4.2, category: "Accessories", image: "/images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: 3499, rating: 4.3, category: "Accessories", image: "/images/smartwatch.jpg" },
  { id: 5, name: "Shoes", price: 1499, rating: 4.1, category: "Fashion", image: "/images/shoes.jpg" },
  { id: 6, name: "T-shirt", price: 799, rating: 4.0, category: "Fashion", image: "/images/tshirt.jpg" },
  { id: 7, name: "Jeans", price: 1299, rating: 4.3, category: "Fashion", image: "/images/jeans.jpg" },
  { id: 8, name: "Tablet", price: 20999, rating: 4.6, category: "Electronics", image: "/images/tablet.jpg" },
  { id: 9, name: "Wireless Mouse", price: 599, rating: 4.4, category: "Accessories", image: "/images/mouse.jpg" },
  { id: 10, name: "Keyboard", price: 1299, rating: 4.5, category: "Accessories", image: "/images/keyboard.jpg" },
];

const ProductListing = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // State for filtering and sorting
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([...allProducts]);

  // Extract unique categories
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  // Handle Sorting
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...products];

    if (value === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="product-listing">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h2>Products</h2>

     
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="category-filter">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

  

      
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
          </div>
        ))}
      </div>

      <FloatingCart />
    </div>
  );
};

export default ProductListing;
