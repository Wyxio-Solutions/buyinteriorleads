import React , {useContext} from 'react';
import './index.css';

import {DataContext} from '../ContextAPI'

const Stats = () => {

    const { wishlist, loading, error , orders , cart } = useContext(DataContext);
    return (

        <div className="stats-grid">
        <div className="stat-card">
            <div className="stat-icon">
                <i className="ri-shopping-bag-line"></i>
            </div>
            <h3>{orders.length}</h3>
            <p>Total Orders</p>
        </div>
        <div className="stat-card">
            <div className="stat-icon">
                <i className="ri-shopping-bag-line"></i>
            </div>
            <h3>24</h3>
            <p>Downloads</p>
        </div>
        <div className="stat-card">
            <div className="stat-icon">
                <i className="ri-shopping-bag-line"></i>
            </div>
            <h3>{cart.length}</h3>
            <p>Add to cart</p>
        </div>
        <div className="stat-card">
            <div className="stat-icon">
                <i className="ri-shopping-bag-line"></i>
            </div>
            <h3>{wishlist.length}</h3>
            <p>Wishlist</p>
        </div>
    </div>

    );
}

export default Stats;