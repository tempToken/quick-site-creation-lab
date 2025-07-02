
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Journey from "@/components/Journey";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Categories />
      <Journey />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
