import React from 'react';
import icon from '../assets/rotterdam.svg';
import menu from '../assets/menu.svg';

const Header = () => {
    return (
        <div className="w-full h-12 flex justify-between bg-primary">
            <a href="/">
                <img src={icon} alt="icon" className="h-full px-4" />
            </a>
            <p className="text-center self-center font-bold text-2xl">Rotterdams weer</p>
            <img src={menu} alt="icon" />
        </div>
    )
}

export default Header;