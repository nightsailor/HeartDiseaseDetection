/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./topbar.css";
import logo from "./logo4a.png"
import userImg from "./user.png"

export default function TopBar() {
  const user = window.localStorage.getItem("user");

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <img src={logo} className="brand-logo" alt="" />
        <div className="nav-items">
          <a href="#"><img src={userImg} alt="" /></a>
        </div>
      </div>
    </nav>
  );
}
