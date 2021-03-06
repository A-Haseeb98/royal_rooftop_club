import React from "react";
import styles from "./development.module.css";
const Development = () => {
  return (
    <div className={styles.development}>
      <div className="container">
        <h2>DEVELOPMENT 2.0</h2>
        <p>
          Undoubtedly, the web is one of the few fully cross-platform tools;
          creating a virtual reality (VR) app with JavaScript will work on any
          VR system. Therefore, only a few relevant and up-to-date technologies
          must be used to create VR websites.
        </p>
        <p>
          We’ll be utilizing Aframe.io, a library for rendering and VR scenes
          with some basic HTML and Javascript. Three.Js, which Aframe.io
          supports, may be used to create more sophisticated visuals.
        </p>
        <p>
          We will be utilizing WebXR, a Mozilla-developed library that allows
          interaction with web-based VR.
        </p>

        <br />
        <h6> Welcome aboard</h6>
      </div>
    </div>
  );
};

export default Development;
