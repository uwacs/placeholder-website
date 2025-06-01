export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white min-h-screen">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          University of Winnipeg
          <br />
          Computer Science Student Association
        </h1>
        <p className="text-lg">
          Connecting students, fostering innovation, and building a community of
          future tech leaders.
        </p>
        <div className="space-x-4">
          <button className="px-5 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-100">
            Learn More
          </button>
          <button className="px-5 py-2 border border-white rounded hover:bg-white hover:text-blue-600">
            Contact Us
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          src="/hero-image.png"
          alt="CSSA Visual"
          className="w-80 h-auto opacity-70 rounded-lg"
        />
      </div>
    </section>
  );
}
