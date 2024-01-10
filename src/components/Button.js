import React from "react";
import "../styles/Button.css";

const Button = ({ danger, disabled, onClick, children }) => {
  const classes = `button ${danger ? "danger" : ""} ${
    disabled ? "disabled" : ""
  }`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
