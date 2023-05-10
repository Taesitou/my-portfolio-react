import "../styles/header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <h1>GranTae</h1>
        </div>
        <div className="menu">
            <a href="/" className="menu-labels">Home</a>
            <a href="/" className="menu-labels">About me</a>
            <a href="/" className="menu-labels">My projects</a>
            <a href="/" className="menu-labels">Contact me</a>
        </div>
    </div>
  );
}

export default Header;

