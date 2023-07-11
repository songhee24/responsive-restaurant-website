import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
    </div>
  </div>
);

export default Gallery;
