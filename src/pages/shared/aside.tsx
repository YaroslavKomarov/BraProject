import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

function Aside() {
    return (
        <aside className="accordion">
                <div className="accordion__title">MENU</div>
                <ul className="tags">
                    <li className="tag"> Filters
                        <Dropdown />
                    </li>
                    <li className="tag">
                        <NavLink to="/" className="tag__link link">Favourites</NavLink>
                    </li>
                    <li className="tag">
                        <NavLink to="/" className="tag__link link">Profile</NavLink>
                    </li>
                </ul>
        </aside>
    );
}

export default Aside;