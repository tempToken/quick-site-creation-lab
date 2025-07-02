
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TopPicks from "@/components/TopPicks";
import Journey from "@/components/Journey";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* Add padding to account for fixed header */}
        <Hero />
        <div id="categories">
          <Categories />
        </div>
        <div id="top-picks">
          <TopPicks />
        </div>
        <div id="journey">
          <Journey />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Testimonials />
        <div id="blog">
          <Blog />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
