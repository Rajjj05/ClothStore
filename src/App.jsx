import Header from "./components/Header";
import AutoCarousel from "./components/AutoCarousel";
import AnimatedCarousel from "./components/AnimatedCarousel";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary text-white">
      <Header />

      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Elevate Your Style
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover our premium collection of contemporary fashion curated
              for the modern individual
            </p>
            <button className="px-8 py-3 bg-accent hover:bg-accent/80 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-accent"></span> Featured Collection
          </h2>
          <AutoCarousel products={products} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-accent"></span> New Arrivals
          </h2>
          <AnimatedCarousel products={products} />
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-5xl font-bold mb-2">2K+</h3>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold mb-2">150+</h3>
            <p className="text-gray-300">Premium Products</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold mb-2">98%</h3>
            <p className="text-gray-300">Positive Reviews</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
