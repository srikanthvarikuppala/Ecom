import React from "react";
import { NavLink } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <div className="links">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/About"> About</NavLink>
        <NavLink to="/service"> serives</NavLink>
      </div>
    </div>
  );
};

export default Links;
