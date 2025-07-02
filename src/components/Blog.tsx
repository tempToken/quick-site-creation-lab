
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Productivity",
      title: "Balancing Work And Study: A Guide For Online Learners",
      description: "Explore key factors in selecting an online course that aligns with your career goals.",
      date: "March 29, 2025",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      category: "Learning Tips",
      title: "How to Choose the Right Online Course for Your Career",
      description: "Expert guidance on selecting courses that match your professional goals.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      category: "Career",
      title: "2025 Skill Forecast: The Top 10 Abilities You Need to Thrive",
      description: "Essential skills for career advancement in the modern workplace.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      category: "Motivation",
      title: "How to Stay Motivated in Long-Term Online Courses",
      description: "Strategies to maintain engagement throughout your learning journey.",
      date: "March 27, 2025",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      category: "Personal Growth",
      title: "Why Lifelong Learning is Your Biggest Career Asset",
      description: "The importance of continuous learning in today's economy.",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const faqItems = [
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes! All paid courses come with a downloadable certificate. Free courses do not include certificates."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely. All courses are self-paced, allowing you to study whenever it suits you."
    },
    {
      question: "What kind of support will I receive?",
      answer: "You'll have access to community forums, instructor Q&As, and for Pro Plan users—1-on-1 mentorship."
    },
    {
      question: "Are courses updated regularly?",
      answer: "Yes, our instructors update course content regularly to ensure it stays relevant and up-to-date."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Productivity": "bg-purple-100 text-purple-700",
      "Learning Tips": "bg-blue-100 text-blue-700",
      "Career": "bg-green-100 text-green-700",
      "Motivation": "bg-pink-100 text-pink-700",
      "Personal Growth": "bg-yellow-100 text-yellow-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Blog Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              Blog
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-purple-600">Insights</span> & Ideas
                <br />
                From <span className="text-purple-600">Eduvance</span>
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-gray-600 text-lg mb-6">
                Stay inspired and informed with expert tips, industry trends, and practical advice for lifelong learners.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                View More
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Featured Post */}
          <div className="lg:col-span-1">
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Regular Posts */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2">{post.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                FAQ'S
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Frequently</span> Asked
              <br />
              Question
            </h3>
            <p className="text-gray-600 text-lg">
              Have questions? We've got answers to help you get the most out of your learning journey.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                    Q: {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    A: {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
