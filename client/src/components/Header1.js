import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header1.module.css";

import nasalogo2 from "./nasalogo2.png";

const Header1 = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    // alert("Logout Successfully");
  };

  return (
    <>
      <nav className={styles.section1}>
        <NavLink to="/">
          <img className={styles.logo} src={nasalogo2} alt="" />
        </NavLink>

        <ul className={styles.authi}>
          {!localStorage.getItem("token") ? (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink onClick={handleLogout} to="/login">
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header1;
