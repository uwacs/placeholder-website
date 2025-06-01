export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          About Our Association
        </h2>
        <div className="w-20 h-1 mx-auto mt-2 bg-blue-600 rounded" />
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: "🛡️",
            title: "Our Mission",
            text: "To create a supportive community for computer science students at the University of Winnipeg, fostering academic excellence and professional development.",
          },
          {
            icon: "⚡",
            title: "Our Vision",
            text: "To be a catalyst for innovation and collaboration, preparing students to become leaders in the ever-evolving field of computer science and technology.",
          },
          {
            icon: "👥",
            title: "Our Values",
            text: "We believe in inclusivity, continuous learning, ethical computing practices, and building meaningful connections within our tech community.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-blue-50 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* What We Do */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-8">What We Do</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "💡",
              title: "Workshops & Hackathons",
              text: "We organize regular coding workshops, hackathons, and tech talks to enhance practical skills and foster innovation.",
            },
            {
              icon: "💼",
              title: "Career Development",
              text: "We connect students with industry professionals through networking events, resume workshops, and internship opportunities.",
            },
            {
              icon: "📘",
              title: "Academic Support",
              text: "We provide study groups, tutoring sessions, and resources to help students excel in their computer science courses.",
            },
            {
              icon: "🤝",
              title: "Community Building",
              text: "We host social events, game nights, and team-building activities to create a supportive and inclusive community.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-md text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
