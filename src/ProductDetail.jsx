import React, { useState } from 'react'; // Add useState here
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; 

const products = [
  {
    id: 1,
    name: 'Gaming Headphones',
    description: "5 Colors available",
    price: '$239',
    status: "Available",
    rating: 4,
    ratedBy: 259,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/1.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/1.png",
      "https://rangashopping.lk/wp-content/uploads/2021/02/hp_bm200.png",
      "https://www.nanotek.lk/uploads/product/59-20240129145418-razer-kraken-kitty-edition.png",
      "https://img.tttcdn.com/product/xy/2000/2000/p/gu1/V/W/V9665W/V9665W-1-7353-T5Uh.jpg",
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/1_yellow.png"
    ]
  },
  {
    id: 2,
    name: 'Macbook Pro 13in',
    description: "256, 8 core GPU, 8GB",
    price: '$1099',
    status: "Available",
    rating: 4,
    ratedBy: 121,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/2.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/2.png",
      "https://example.com/macbook_pro_13in_color2.png",
      "https://example.com/macbook_pro_13in_color3.png",
      "https://example.com/macbook_pro_13in_color4.png",
      "https://example.com/macbook_pro_13in_color5.png"
    ]
  },
  {
    id: 3,
    name: 'Homepod Mini',
    description: "5 Colors available",
    price: '$59',
    status: "Available",
    rating: 3,
    ratedBy: 112,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/3.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/3.png",
      "https://example.com/homepod_mini_color2.png",
      "https://example.com/homepod_mini_color3.png",
      "https://example.com/homepod_mini_color4.png",
      "https://example.com/homepod_mini_color5.png"
    ]
  },
  {
    id: 4,
    name: 'Laptop Sleeve MacBook',
    description: "Organic cotton, fairtrade certified",
    price: '$67',
    status: "Out of stock",
    rating: 4,
    ratedBy: 321,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/4.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/4.png",
      "https://example.com/laptop_sleeve_color2.png",
      "https://example.com/laptop_sleeve_color3.png",
      "https://example.com/laptop_sleeve_color4.png",
      "https://example.com/laptop_sleeve_color5.png"
    ]
  },
  {
    id: 5,
    name: 'i7s Airpods',
    description: "Full set with box and charging case",
    price: '$199',
    status: "Available",
    rating: 4,
    ratedBy: 52,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/5.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/5.png",
      "https://example.com/airpods_color2.png",
      "https://example.com/airpods_color3.png",
      "https://example.com/airpods_color4.png",
      "https://example.com/airpods_color5.png"
    ]
  },
  {
    id: 6,
    name: 'Wallets for Men',
    description: "Pure leather, 100% waterproof",
    price: '$52',
    status: "Out of stock",
    rating: 4,
    ratedBy: 72,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/6.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/6.png",
      "https://example.com/wallet_color2.png",
      "https://example.com/wallet_color3.png",
      "https://example.com/wallet_color4.png",
      "https://example.com/wallet_color5.png"
    ]
  },
  {
    id: 7,
    name: 'Ladies Handbag',
    description: "Fashion handbags simple large-capacity",
    price: '$240',
    status: "Available",
    rating: 4,
    ratedBy: 124,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/7.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/7.png",
      "https://example.com/handbag_color2.png",
      "https://example.com/handbag_color3.png",
      "https://example.com/handbag_color4.png",
      "https://example.com/handbag_color5.png"
    ]
  },
  {
    id: 8,
    name: 'Italian Male Footwear',
    description: "Comfortable leather shoes for men",
    price: '$114',
    status: "Available",
    rating: 4,
    ratedBy: 32,
    imageUrl: "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/8.png",
    colors: [
      "https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/8.png",
      "https://example.com/footwear_color2.png",
      "https://example.com/footwear_color3.png",
      "https://example.com/footwear_color4.png",
      "https://example.com/footwear_color5.png"
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={selectedColor} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p className="detail-price">{product.price}</p>
        <p>{product.description}</p>
        <p>Status: {product.status}</p>
        <p>Rating: {product.rating} (Rated by {product.ratedBy} people)</p>
        
        <div className="color-options">
          {product.colors.map((colorUrl, index) => (
            <button 
              key={index}
              style={{ backgroundImage: `url(${colorUrl})` }}
              onClick={() => setSelectedColor(colorUrl)}
              className="color-option"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
