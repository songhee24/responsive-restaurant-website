import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
