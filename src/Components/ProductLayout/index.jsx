import { useState } from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { BsBorderWidth } from "react-icons/bs";
import { CgOverflow } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

export default function ProductDisplay({ products }) {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate("/PDP", { state: { product } });
  };

  return (
    <div className="product-display">
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product)}
            className="product-card"
          >
            <img
              src="https://bookmyinteriorlead.com/wp-content/uploads/2020/11/NEW-WEBSITE-THEME-LEAD-IMAGE.jpg"
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-name">
                {product.name} / {product.service_required_on} /{" "}
                {product.property_type}
              </h2>
              <div className="product-location">
                <CiLocationOn size={16} />
                <h4 className="location-text">{product.location}</h4>
              </div>
              <div className="product-price">
                <p className="discount-price">₹{product.discount_price}</p>
                <p className="original-price">₹{product.price}</p>
              </div>
              <div className="button-container">
                <button className="add-to-cart-button">
                  {/* <IoCartOutline size={20} /> */}
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
