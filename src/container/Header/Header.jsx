import React from "react";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper-img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
