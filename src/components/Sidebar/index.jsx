import React, { useState } from "react";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton";
import Links from "./Links";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div className="bg" variants={varients}>
        <Links />
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
