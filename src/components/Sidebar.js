import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineWallet } from "react-icons/ai";
import "../Sidebar.css";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState("home"); // Default to "home"

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"} bg-dark`}>
      <button onClick={toggleSidebar} className="toggle-btn btn-sm">
        {isSidebarOpen ? ">" : "<"}
      </button>
      <div className="sidebar-content">
        <div
          className={`sidebar-icon ${activeIcon === "home" ? "active" : ""}`}
          onClick={() => handleIconClick("home")}
        >
          <IoMdHome />
        </div>

        <div className="sidebar-icon">
          <MdInsertChartOutlined />
        </div>

        <div className="sidebar-icon">
          <LuClipboardCheck />
        </div>

        <div className="sidebar-icon">
          <AiOutlineWallet />
        </div>

        <div className="sidebar-icon">
          <IoBagCheckOutline />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
