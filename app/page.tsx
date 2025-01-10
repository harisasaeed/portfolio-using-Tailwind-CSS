export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-indigo-300">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I am Harisa Saeed</h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate  developer creating amazing web experiences
          </p>
          <a href="/projects" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            View My Work
          </a>
        </div>
      </section>
    </main>
  );
}