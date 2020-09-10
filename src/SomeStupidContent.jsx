import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export default ({ style, label, handleClick }) => {
  return (
    <>
      <motion.p
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus
        repellat doloribus quidem, voluptates magni excepturi amet aliquam animi
        aut veritatis eveniet praesentium quo ullam similique aperiam obcaecati,
        illum reiciendis!
      </motion.p>
      <motion.p
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus
        repellat doloribus quidem, voluptates magni excepturi amet aliquam animi
        aut veritatis eveniet praesentium quo ullam similique aperiam obcaecati,
        illum reiciendis!
      </motion.p>
      <motion.p
        variants={item}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus
        repellat doloribus quidem, voluptates magni excepturi amet aliquam animi
        aut veritatis eveniet praesentium quo ullam similique aperiam obcaecati,
        illum reiciendis!
      </motion.p>
    </>
  );
};
