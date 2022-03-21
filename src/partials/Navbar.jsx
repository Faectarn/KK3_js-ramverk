import React from "react";
import { cartListStatsState } from '../stores/products/atom';
import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import '../style/Navbar.css';

function Navbar() {
  const {
    itemsInCart,
    totalItemsInCart,
  } = useRecoilValue(cartListStatsState);

  return (
    <header className="Navbar">
      <h1>FRUKOSTBORDET</h1>
      <div className="NavMenu">
        <Link to="/">HEM</Link>
        <Link to="/products">PRODUKTER</Link>
        <Link to="/cart">VARUKORG <small>{itemsInCart > 0 && `${totalItemsInCart}`}</small></Link>
      </div>
    </header>
  );
}

export default Navbar;