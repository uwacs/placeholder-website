export default function FooterSection() {
  return (
    <>
      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="mb-6 text-sm">
          Subscribe to our newsletter to receive updates on events,
          opportunities, and news.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 px-4 py-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center space-x-3 text-xl font-bold">
            <span role="img" aria-label="computer">
              🖥️
            </span>
            <span>UW CSSA</span>
          </div>
          <p className="text-sm text-gray-300 max-w-md">
            Connecting students, fostering innovation, and building a community
            of future tech leaders.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-white hover:text-blue-400 text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
