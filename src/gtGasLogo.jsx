import { motion } from "framer-motion";

const GTGasLogo = (props) => {
  const gt = {
    fontWeight: "900",
    color: "white",
  };

  const rest = {
    letterSpacing: "-1.2px",
    fontWeight: "200",
    color: "white",
  };

  return (
    <>
      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        animate={{ x: "0", opacity: 1.0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flame width={props.width} height={props.height} />
        <div style={{ display: "flex", alignItems: "end" }}>
          <div style={gt}>G</div>
          <div style={gt}>T</div>
          <div style={rest}>G</div>
          <div style={rest}>a</div>
          <div style={rest}>s</div>
          <div style={rest}>w</div>
          <div style={rest}>o</div>
          <div style={rest}>r</div>
          <div style={rest}>k</div>
          <div style={rest}>s</div>
        </div>
      </motion.div>
    </>
  );
};

const Flame = (props) => {
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || "291"}
        height={props.height || "521"}
        fill="none"
        viewBox="0 0 291 521"
      >
        <path
          fill="url(#paint0_linear_566_174)"
          d="M147.521 0c83.5 64.344 275.178 383.828.986 520.333 0 0 118.541-122.604 30.338-274.666-17.781 80-118.532 101.317-106.37 247.297C-134.327 289.203 169.423 142.369 147.52 0z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_566_174"
            x1="145.399"
            x2="145.399"
            y1="520.333"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              stopColor="#2B00FF"
              animate={{
                stopColor: [
                  "#0055FF",
                  "#FFF9DA",
                  "#E7FFF7",
                  "#FFC6A8",
                  "#FF7744",
                  "#F3F2F2",
                ],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="25%"
            />
            <motion.stop
              stopColor="#0055FF"
              animate={{
                stopColor: [
                  "#0055FF",
                  "#FFF9DA",
                  "#FFC6A8",
                  "#FF7744",
                  "#2B00FF",
                ],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="50%"
            />
            <motion.stop
              stopColor="#D4504C"
              animate={{
                stopColor: ["#FFF9DA", "#E7FFF7", "#0055FF"],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="75%"
            />
            <motion.stop
              stopColor="#FF7744"
              animate={{
                stopColor: ["#D4504C", "#2B00FF", "#E7FFF7", "#FFF9DA"],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="100%"
            />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default GTGasLogo;
