import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.css';

const Index = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 456);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 456);
            if (window.innerWidth >= 456) {
                setMenuOpen(false); // Close menu when resizing to larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="container-H">
                {/* <div className="logo-header">
                    <img style={{width:'15%', height:'15%'}}src='/logoIM.jpeg' alt='logo'/>
                </div> */}

                <img className='logo-m' src='/logoIM.jpeg' alt='logo'/>

                {isMobile ? (
                    <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                ) : (
                    <div className="nav-links">
                        <NavLinks />
                    </div>
                )}

                {!isMobile && (
                    <div className="nav-actions">
                        <CartAndButton />
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobile && menuOpen && (
                <div className="mobile-menu">
                    <NavLinks />
                    <CartAndButton />
                </div>
            )}
        </nav>
    );
};

const NavLinks = () => (
    <>
        <Link className="name" to="/">Home</Link>
        <Link className="name" to="/about">About</Link>
        <Link className="name" to="/location">Locations</Link>
        <Link className="name" to="/RefundPolicy">Refund Policy</Link>
        <Link className="name" to="/Privacypolicy">Privacy Policy</Link>
        <Link className="name" to="/Profile">Profile</Link>
    </>
);

const CartAndButton = () => (
    <div className="cart-btn-container">
        <div className="cart-icon" id="cartIcon">
            <i className="ri-shopping-cart-line"></i>
            <span className="cart-count">3</span>
        </div>
        <Link to="/SignIn">
            <button className="get-started">Get Started</button>
        </Link>
    </div>
);

export default Index;
