import React from "react";
import { motion } from "framer-motion";

import RippleButton from "./RippleButton";
import SomeStupidContent from "./SomeStupidContent";

const shade = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 0.89, transition: { duration: 0.2 } }
};

const modal = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: { staggerChildren: 0.125, staggerDirection: -1, delay: 0.3 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, delayChildren: 0.5 }
  }
};

export default ({ close }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="Modal-root"
    >
      <motion.div variants={shade} className="Modal-shade" onClick={close} />
      <motion.div variants={modal} className="Modal-container">
        <RippleButton
          label="X"
          handleClick={close}
          style={{ position: "absolute", padding: "2rem" }}
        />
        <div className="Modal-content">
          <SomeStupidContent />
        </div>
      </motion.div>
    </motion.div>
  );
};
