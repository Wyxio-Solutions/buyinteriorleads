import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./index.css"; 

const AddressForm = ({ onClose, onSubmit }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Add New Address</h2>
          <button onClick={onClose} className="close-button">
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <input type="hidden" name="id" value="" />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="form-input"
              />
            </div>
            <div className="form-group md:col-span-2">
              <label className="form-label">Company Name</label>
              <input type="text" name="companyName" className="form-input" />
            </div>
            <div className="form-group md:col-span-2">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">City</label>
              <input type="text" name="city" required className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">State</label>
              <input type="text" name="state" required className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                name="country"
                defaultValue="India"
                required
                className="form-select"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Postcode</label>
              <input
                type="text"
                name="postcode"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" required className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Address Type</label>
              <select
                name="addressType"
                defaultValue="Home"
                required
                className="form-select"
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="btn-container-address">
            <button
              type="button"
              onClick={onClose} 
              className="button button-cancel"
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
