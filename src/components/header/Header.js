import React from 'react';
import logo from '../../view/images/logo.svg';
import './Header.css'

const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="Pokemon Logo" />
            <div className="header-sign">
                <span>by Alesandro Barbosa</span>
            </div>
        </div>

    )
}

export default Header;