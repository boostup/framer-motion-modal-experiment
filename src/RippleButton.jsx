import React from "react";
import { motion } from "framer-motion";

export default ({ rippleSize = "25%", style, label, handleClick }) => {
  const buttonAnimation = {
    untouched: {
      clipPath: `circle(${rippleSize} at 50% 50%)`,
      background: "#0971f1"
    },
    touched: {
      clipPath: `circle(100% at 50% 50%)`,
      background: "#549BF2"
    }
  };

  return (
    <motion.button
      initial="untouched"
      whileTap="touched"
      onTap={handleClick}
      variants={buttonAnimation}
      style={style}
    >
      {label}
    </motion.button>
  );
};
