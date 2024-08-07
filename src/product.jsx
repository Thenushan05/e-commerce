import React from 'react';
import StarRating from './StarRating';
import './product.css';
import { useNavigate } from 'react-router-dom';



const products = [
    
        {
          id: 1,
          name: 'Gaming Headphones',
          description: "5 Colors available",
          price: '$239',
          status: "Available",
          rating: 4,
          ratedBy: 259,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/1.png"
        },
        {
          id: 2,
          name: "Macbook Pro 13in",
          description: "256, 8 core GPU, 8GB",
          price: '$1099',
          status: "Available",
          rating: 4,
          ratedBy: 121,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/2.png"
        },
        {
          id: 3,
          name: "Homepod Mini",
          description: "5 Colors available",
          price: '$59',
          status: "Available",
          rating: 3,
          ratedBy: 112,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/3.png"
        },
        {
          id: 4,
          name: "Laptop Sleeve MacBook",
          description: "Organic cotton, fairtrade certified",
          price: '$67',
          status: "Out of stock",
          rating: 4,
          ratedBy: 321,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/4.png"
        },
        {
          id: 5,
          name: "i7s Airpods",
          description: "Full set with box and charging case",
          price: '$199',
          status: "Available",
          rating: 4,
          ratedBy: 52,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/5.png"
        },
        {
          id: 6,
          name: "Wallets for Men",
          description: "Pure leather, 100% waterproof",
          price: '$52',
          status: "Out of stock",
          rating: 4,
          ratedBy: 72,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/6.png"
        },
        {
          id: 7,
          name: "Ladies Handbag",
          description: "Fashion handbags simple large-capacity",
          price: '$240',
          status: "Available",
          rating: 4,
          ratedBy: 124,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/7.png"
        },
        {
          id: 8,
          name: "Italian Male Footwear",
          description: "Comfortable leather shoes for men",
          price: '$114',
          status: "Available",
          rating: 4,
          ratedBy: 32,
          imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/8.png"
        }
      ];
      



      
      
      const ProductList = ({ onAddToCart }) => {
        const navigate = useNavigate();
      
        const handleProductClick = (id) => {
          navigate(`/product/${id}`);
        };
      
        return (
          <section className="product-list">
            <h2>Our Products</h2>
            <div className="products">
              {products.map((product) => (
                <div key={product.id} className="product" onClick={() => handleProductClick(product.id)}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <StarRating rating={product.rating} />
                  <p>{product.description}</p>
                  <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>Add to Cart</button>
                </div>
              ))}
            </div>
          </section>
        );
      };
      
      export default ProductList;