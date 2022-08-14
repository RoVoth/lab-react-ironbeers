import React from "react";
import { Link } from "react-router-dom";

function HeaderLinkNav() {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <Link to={"/"}>HOME</Link>
    </nav>
  );
}

export default HeaderLinkNav;
