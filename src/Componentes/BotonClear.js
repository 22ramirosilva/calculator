import React from "react";
import "../CSS/BotonClear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.handleClear}>
    Clear
  </div>
);

export default BotonClear;
