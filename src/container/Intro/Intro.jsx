import React, { useRef, useState } from "react";

import "./Intro.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const onHandleVideo = () => {
    setPlayVideo((prevState) => !prevState);
  };

  if (playVideo) {
    videoRef.current?.pause();
  } else {
    videoRef.current?.play();
  }

  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted={false}
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={onHandleVideo}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
