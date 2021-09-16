import React from 'react';
import icon from '../assets/rotterdam.svg';
// import menu from '../assets/menu.svg';

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img src={icon} alt="icon" />
            </a>
            <p>Rotterdams weer</p>
            {/* <img src={menu} alt="icon" /> */}
        </div>
    )
}

export default Header;