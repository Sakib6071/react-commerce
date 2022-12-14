import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navHeader'>
                <img src={logo} alt="logo" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;