import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";


function Header({ logout, isAuthenticated }) {
  const guestLinks = () => {
    return (
      <Fragment>
        <Link style={{ textDecoration: 'none' }} to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/signup">
          <div className="header__option">
            <span className="header__optionLineOne">New?</span>
            <span className="header__optionLineTwo">Sign Up</span>
          </div>
        </Link>
      </Fragment>
    );
  };

  const authLinks = () => {
    return (
      <div className="header__option">
        <a className="header__optionLineTwoA" onClick={logout} href="#!">
          Logout
        </a>
      </div>
    );
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.dribbble.com/users/5973612/screenshots/15562505/media/09b4b643795255603029f9140aa4602a.jpg?compress=1&resize=400x300&vertical=top"
          alt="home logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon style={{ fontSize: '37px' }}/>
          </div>
      </Link>
        {isAuthenticated ? authLinks() : guestLinks()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
