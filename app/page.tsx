export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">🎯 Goal Tracker AI</h1>
            </div>
            <div className="flex space-x-4">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Features</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">About</a>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Goal Tracker AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered goal setting, milestone tracking, and progress visualization
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
              Start Tracking Goals
            </button>
            <button className="bg-white dark:bg-gray-800 text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Goal Setting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set SMART goals with AI-powered suggestions and milestone tracking
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visualize your journey with beautiful charts and progress metrics
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">AI Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized recommendations to achieve your goals faster
            </p>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="mt-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Why Choose Goal Tracker AI?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Powered by cutting-edge AI technology, our platform helps you set, track, and achieve your goals
            with personalized insights and intelligent recommendations. Join thousands of users who have
            already transformed their lives with goal tracking.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Goal Tracker AI. Built with ❤️ using Next.js & AI</p>
          <p className="mt-2 text-sm">Ready for production deployment on Hostinger VPS</p>
        </div>
      </footer>
    </div>
  );
}
