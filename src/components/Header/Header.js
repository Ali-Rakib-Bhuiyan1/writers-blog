import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="../../logo.png" alt=""/>
           <h1>Addha with writer</h1>
           <p>Toal cost: <span className ='money'>$1000000000 milion</span></p>
        </div>
    );
};

export default Header;