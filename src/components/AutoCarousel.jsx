/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const AutoCarousel = ({ products }) => {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "1rem",
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        perPage: 3,
        interval: 3000,
        height: "300px",
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
        },
        pagination: false,
        arrows: false,
        focus: "center",
        trimSpace: false,
        padding: "5%",
      }}
      className="my-12"
    >
      {products.map((product) => (
        <SplideSlide key={product.id}>
          <div className="relative h-full group cursor-pointer overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-white text-lg">${product.price}</p>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default AutoCarousel;
