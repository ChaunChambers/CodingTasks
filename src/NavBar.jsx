import { useState } from 'react';
import Link from './Link.jsx';
import styles from './NavBar.module.css';
import Products from './Products.jsx';

function NavBar({ totalPrice }) {
  
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/home">Home </Link>
        <Link to="/products">Products </Link>
        <Link to="/about">About </Link>
      </nav>
    </>
  );
}

export default NavBar;
