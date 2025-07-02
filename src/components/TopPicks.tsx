
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen } from "lucide-react";

const TopPicks = () => {
  const courses = [
    {
      id: 1,
      category: "Technology & Development",
      title: "Full Stack Web Development Bootcamp",
      description: "Transform ideas into reality with innovative designs, advanced technology, and end-to-end support",
      lessons: 60,
      duration: "60hrs",
      students: 75,
      rating: 5.0,
      price: 79,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      category: "Design & Creativity",
      title: "Creative Graphic Design Essentials",
      description: "Master the fundamentals of visual design and bring your creative ideas to life.",
      lessons: 28,
      duration: "40hrs",
      students: 100,
      rating: 4.6,
      price: 39,
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      category: "Health & Wellness",
      title: "Mindfulness & Stress Management",
      description: "Discover practical techniques to reduce stress, stay present, and improve your overall well-being.",
      lessons: 18,
      duration: "8hrs",
      students: 90,
      rating: 4.9,
      price: 29,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Technology & Development": "bg-blue-100 text-blue-700",
      "Design & Creativity": "bg-purple-100 text-purple-700",
      "Health & Wellness": "bg-green-100 text-green-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-purple-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-purple-400 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-purple-600 bg-white px-3 py-1 rounded-full">
                Courses
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Top <span className="text-purple-600">Picks</span> To Kickstart
              <br />
              Your <span className="text-purple-600">Learning</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-50 text-gray-900 border-gray-200"
          >
            View More Courses
          </Button>
        </div>

        {/* Course Cards */}
        <div className="space-y-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                {/* Course Info */}
                <div className="flex-1 p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(course.category)}`}>
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Course Stats */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} Students</span>
                      </div>
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                          View Courses
                        </Button>
                        <span className="text-3xl font-bold text-purple-600">
                          ${course.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {renderStars(course.rating)}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          ({course.rating})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Course Image */}
                <div className="lg:w-80 xl:w-96">
                  <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
