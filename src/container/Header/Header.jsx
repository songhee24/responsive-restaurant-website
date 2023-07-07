import React from "react";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading />
    </div>

    <div className="app__wrapper-img"></div>
  </div>
);

export default Header;
