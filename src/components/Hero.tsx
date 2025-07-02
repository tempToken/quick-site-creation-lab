
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-300 rounded-full opacity-30"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              🎓 #1 Online Learning Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Future With
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Practical Skills
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Master in-demand skills with expert-led courses, hands-on projects, and personalized learning paths designed for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg group">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-purple-300 px-8 py-4 rounded-xl font-semibold text-lg group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">120+</div>
                <div className="text-gray-600">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">600+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">4.9/5</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Woman learning online" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                New Course!
              </div>
            </div>
            <div className="absolute top-10 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl z-20">
              <div className="text-sm font-medium">Live Session</div>
              <div className="text-xs opacity-90">Starting in 5 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
