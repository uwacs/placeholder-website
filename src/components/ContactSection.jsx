export default function ContactSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-2">
          Have questions or want to get involved? Reach out to us!
        </p>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Contact Information
          </h3>

          <div className="flex items-start space-x-4">
            <span className="bg-blue-100 p-2 rounded-full">📍</span>
            <div>
              <p className="font-semibold text-gray-800">Location</p>
              <p className="text-gray-600 text-sm">
                University of Winnipeg
                <br />
                515 Portage Avenue
                <br />
                Winnipeg, MB R3B 2E9
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-blue-100 p-2 rounded-full">📧</span>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-sm text-gray-600">cssa@uwinnipeg.ca</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-blue-100 p-2 rounded-full">⏰</span>
            <div>
              <p className="font-semibold text-gray-800">Office Hours</p>
              <p className="text-sm text-gray-600">
                Monday – Friday: 10:00 AM – 4:00 PM
                <br />
                Room 3D25 (Lockhart Hall)
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-blue-100 p-2 rounded-full">❓</span>
            <div>
              <p className="font-semibold text-gray-800">Social Media</p>
              <div className="flex space-x-4 mt-2 text-gray-600 text-xl">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-github" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded px-4 py-2 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border rounded px-4 py-2 w-full"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="border rounded px-4 py-2 w-full"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
