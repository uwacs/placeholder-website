const projects = [
  {
    icon: "🖥️", // Replace with SVG or Font Awesome if needed
    title: "Annual Hackathon",
    description:
      "Our flagship 48-hour coding competition that brings together students to solve real-world problems through technology.",
    tags: ["Coding", "Innovation", "Teamwork"],
  },
  {
    icon: "📖",
    title: "Mentorship Program",
    description:
      "Connecting senior students with freshmen to provide guidance, support, and resources for academic and professional success.",
    tags: ["Mentoring", "Community", "Growth"],
  },
  {
    icon: "🌐",
    title: "Tech Talks Series",
    description:
      "Monthly presentations by industry professionals and faculty members on emerging technologies and career opportunities.",
    tags: ["Learning", "Networking", "Industry"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore some of the innovative projects and initiatives our association
        has been working on.
      </p>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-12 rounded" />

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-blue-50 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="bg-blue-600 text-white h-28 flex justify-center items-center text-4xl">
              {project.icon}
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View All Projects →
        </button>
      </div>
    </section>
  );
}
