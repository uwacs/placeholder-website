const teamMembers = [
  {
    name: "Samin",
    role: "President",
    desc: "Computer Science major with a focus on AI and machine learning.",
    fb: "#",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Isabella",
    role: "Vice President",
    desc: "Specializing in web development and UX/UI design with a passion for accessibility.",
    fb: "#",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Paul Bahiga",
    role: "Vice President",
    desc: "Double major in Computer Science and Mathematics with an interest in cryptography.",
    fb: "#",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vansh Vasudev",
    role: "Communication Lead",
    desc: "Focusing on cybersecurity and network administration with excellent organizational skills.",
    fb: "#",
    linkedin: "#",
    github: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">
          Our dedicated team of student leaders works tirelessly to create
          opportunities and foster a vibrant computer science community.
        </p>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-600 h-20 flex justify-center items-center">
              <div className="w-14 h-14 bg-gray-200 rounded-full border-4 border-white"></div>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>
              <div className="flex justify-center space-x-4 mt-4 text-gray-500 text-xl">
                <a href={member.fb} aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={member.linkedin} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.github} aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
