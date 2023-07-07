import React from "react";

import "./AboutUs.css";

import { images } from "../../constants";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="left spoon" className="spoon__img img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
