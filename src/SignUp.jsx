import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RippleButton from "./RippleButton";
import Modal from "./Modal";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0, 1],
        transition: {
          velocity: 100,
          duration: 0.4
          // loop: Infinity
        }
      }}
      layout
    >
      <RippleButton
        label="Sign Up"
        handleClick={() => setIsOpen(true)}
        rippleSize={"45%"}
        style={{ width: "100%", height: "190px", fontSize: "2rem" }}
      />
      <AnimatePresence>
        {isOpen && <Modal close={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};
