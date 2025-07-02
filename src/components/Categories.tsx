
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Users } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: "Web Development",
      description: "Master modern web technologies",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      courses: "45+ Courses"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful user experiences",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      courses: "32+ Courses"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Grow your online presence",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      courses: "28+ Courses"
    },
    {
      icon: Users,
      title: "Business Skills",
      description: "Leadership and management",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      courses: "38+ Courses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professionally Aligned
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Learning Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly crafted learning paths designed to accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className={`${category.bgColor} rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">
                    {category.courses}
                  </span>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 p-0">
                    Explore →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
