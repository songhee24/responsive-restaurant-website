import React from "react";
import { SubHeading, MenuItems } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <h1>Hellooo</h1>
      <div className="app__specialMenu-title">
        <SubHeading title={"Menu that fits you palatte"} />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_item">
            {data.wines.map((wine, index) => {
              return <p key={index}>{wine.title}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
