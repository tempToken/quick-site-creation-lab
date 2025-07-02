
const Journey = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Path",
      description: "Select from our curated learning paths based on your career goals and interests."
    },
    {
      number: "02",
      title: "Learn & Practice",
      description: "Engage with interactive content, hands-on projects, and real-world applications."
    },
    {
      number: "03",
      title: "Get Certified",
      description: "Earn industry-recognized certificates to showcase your newfound expertise."
    },
    {
      number: "04",
      title: "Advance Career",
      description: "Apply your skills in the real world and take your career to the next level."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Learning Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              In 4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the learning process to help you achieve your goals faster and more effectively
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 opacity-20">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
