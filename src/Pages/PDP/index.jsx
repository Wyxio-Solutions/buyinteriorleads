import React, { useState } from "react";
import "./index.css";

import { useLocation } from 'react-router-dom';

import { CiLocationOn } from "react-icons/ci";

const PropertyDetails = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);


  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="property-details-container">
      <nav className="navbar-PDP">
        <div className="navbar-container">
          <div className="navbar-left">
            <button
              onClick={() => window.history.back()}
              className="navbar-button"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <h1 className="navbar-title">Property Details</h1>
          </div>
          <div className="navbar-right">
            <button className="navbar-button">
              <i className="ri-share-line text-xl"></i>
            </button>
            <button className="navbar-button">
              <i className="ri-bookmark-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content-PDP">
        <div className="property-card">
          <img
            src="https://bookmyinteriorlead.com/wp-content/uploads/2020/11/NEW-WEBSITE-THEME-LEAD-IMAGE.jpg"
            alt="Property Image"
            className="property-image"
          />
          <div className="property-content">
            <div className="property-header">
              <div>
                <h2 className="property-title">{product.name}</h2>
                <div className="property-location">
                  <CiLocationOn size={20}/>
                  <span className="property-location-text">{product.location}</span>
                </div>
              </div>
              <span className="property-status">For Sale</span>
            </div>
            <div className='price-Details'>
              <div className='price-PDP'>
                  <h2> ₹{product.discount_price}</h2>
                  <h3> ₹{product.price}</h3>
              </div>
              <h1>Budget {product.budget}</h1>
            </div>
            <div className='property-details'>
              <h3 className="requirements-title">Property-Details</h3>
              <div className='property-details-sub'>
                <div className='property-details-sub-1'>
                  <div className='property-details-left'>
                    <h2>Property Type</h2>
                    <h2>{product.property_type}</h2>
                  </div>
                  <div className='property-details-left'>
                    <h2>Property ID</h2>
                    <h2>{product.id}</h2>
                  </div>
                </div>
                <div className='property-details-sub-2'>
                  <div className='property-details-right'>
                    <h2>service required on</h2>
                    <h2>{product.service_required_on}</h2>
                  </div>
                  {/* <div className='property-details-right'>
                    <h2>Property ID</h2>
                    <h2>2</h2>
                  </div> */}
                </div>
              </div>


            </div>
            <div className="property-requirements">
              <h3 className="requirements-title">Requirements</h3>
              <p className="requirements-text">{product.requirement}</p>
            </div>
          </div>
        </div>
      </main>
      <div className='buttons-PDP'>
        <button className='btn-PDP'>Add to cart</button>
        <button className='btn-PDP'>Buy Now</button>
      </div>
    </div>
  );
};

export default PropertyDetails;