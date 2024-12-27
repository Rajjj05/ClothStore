/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const AnimatedCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const containerRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1.2,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= products.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = products.length - 1;
      return nextIndex;
    });
  };

  return (
    <div
      {...handlers}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <div
          className="w-40 h-60 bg-cover bg-center opacity-30 blur-sm"
          style={{
            backgroundImage: `url('${
              products[(currentIndex - 1 + products.length) % products.length]
                .image
            }')`,
          }}
        />
        <div
          className="w-40 h-60 bg-cover bg-center opacity-30 blur-sm"
          style={{
            backgroundImage: `url('${
              products[(currentIndex + 1) % products.length].image
            }')`,
          }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-[55%]"
        >
          <div className="w-64 h-80 relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-125">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-xl font-bold mb-2">
                {products[currentIndex].name}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-white text-lg">
                  ${products[currentIndex].price}
                </p>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                  {products[currentIndex].category}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
        onClick={() => paginate(-1)}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
        onClick={() => paginate(1)}
      >
        →
      </button>
    </div>
  );
};

export default AnimatedCarousel;
