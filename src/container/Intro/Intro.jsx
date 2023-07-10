import React, { useRef, useState } from "react";

import "./Intro.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  return (
    <div className="app__video">
      <video ref={videoRef} src={meal} type="video/mp4" loop controls={false} />
    </div>
  );
};

export default Intro;
