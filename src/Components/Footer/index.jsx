import React, { useState } from 'react';
import { 
  Home,
  Info,
  Shield,
  RefreshCw,
  MapPin,
  User,
  Send,
  Mail,
  MessageSquare
} from 'lucide-react';

import './index.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="footer">
        <div className='footer-container'>
            <div className='footer-sub-container'>
                <div className='footer-header'>
                    <h2>Transforming Spaces, Elevating Interiors</h2>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">My Account</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-form">
                <div style={{marginTop:-10}}>
                <h1>Lets Talk</h1>
                <form onSubmit={handleSubmit}>
                    <div className='footer-input'>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;