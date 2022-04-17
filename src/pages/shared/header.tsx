import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
			<NavLink to="/" className="header__home-link link">
				<img className="header__logo" src="assets/images/bra_logo.png" alt="Bra logo" height="38" width="40"/>
				<p className="header__title">CUPSTORY</p>
			</NavLink>
			<nav className="header__navigation">
                <form className="header__search-form">
					<input className="header__search" type="text" placeholder="Search..." />
					<button className="header__search-btn btn"></button>
				</form> 
                <NavLink to="/" className="header__nav-link link">Delivery</NavLink>
                <NavLink to="/" className="header__nav-link link">Guarantees</NavLink>
                <NavLink to="/" className="header__nav-link link">About</NavLink>
            </nav>
		</header>
    );
}

export default Header;