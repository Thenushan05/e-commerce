import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './product';
import ProductDetail from './ProductDetail';

function App() {
  const [cart, setCart] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setDropdownOpen(true);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productToRemove.id));
  };

  const handleCheckout = () => {
    
    alert('Proceeding to checkout');
    setCart([]);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="App">
        {}
        <header>
          <div className="logo">
            <a href="https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/logo.png">
              <img src="https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="user-icons">
            <button onClick={toggleDropdown}>
              Add to Cart ({cart.length})
            </button>
            {isDropdownOpen && (
              <div className="dropdown">
                <h4>Cart Items</h4>
                {cart.length > 0 ? (
                  <>
                    {cart.map((item, index) => (
                      <div key={index} className="dropdown-item">
                        <img src={item.imageUrl} alt={item.name} className="dropdown-image" />
                        <div className="dropdown-details">
                          <p className="dropdown-name">{item.name}</p>
                          <p className="dropdown-price">{item.price}</p>
                          <p className="dropdown-description">{item.description}</p>
                          <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        </div>
                      </div>
                    ))}
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                  </>
                ) : (
                  <p>Cart is empty</p>
                )}
              </div>
            )}
          </div>
        </header>

        {}
        <Routes>
          <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
