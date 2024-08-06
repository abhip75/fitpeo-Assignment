import React from "react";
import { FiMail, FiSearch } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import "../NavBar.css";

const NavBar = ({ isSidebarOpen }) => {
  return (
    <nav className={`navbar navbar-dark bg-dark fixed-top ${isSidebarOpen ? "navbar-expanded" : "navbar-collapsed"}`}>
      <div className="container-fluid d-flex align-items-center">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
        </div>
        <form className="d-flex align-items-center ml-auto">
          <FiMail className="nav-icon" />
          <FiSettings className="nav-icon" />
            <div className="position-relative">
              <IoNotificationsOutline className="nav-icon" />
              <span className="notification-dot"></span>
            </div>
          <img src="/images/avatar.png" alt="avatar" className="profile-icon"/>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
