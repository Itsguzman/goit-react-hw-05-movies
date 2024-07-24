import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
export const Header = () => {
  return (
    <header>
      <nav className={css.headerNav}>
        <NavLink
          to="/"
          end="true"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          end="true"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
