export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🖥️</span>
        <span className="font-bold text-lg">UW CSSA</span>
      </div>
      <ul className="flex space-x-6 text-sm text-gray-700">
        <li>
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#team" className="hover:text-blue-600">
            Team
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
