export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 max-w-7xl mx-auto">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-white">
          Crafting Intuitive User Interfaces & <span className="text-primary">Scalable FinTech Solutions</span>.
        </h1>
        <p className="text-gray-400 text-lg">
          Senior Software Developer with 3+ years of experience specializing in React, Angular, 
          and secure architecture. Expert in delivering compliant software in high-stakes environments.
        </p>
        <button className="bg-primary text-background font-bold px-8 py-4 rounded-lg hover:scale-105 transition transform">
          Explore My Work
        </button>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="w-64 h-64 bg-gradient-to-br from-primary to-blue-500 rounded-full blur-3xl opacity-20 absolute" />
        <img src="/avatar.png" alt="Developer Avatar" className="relative z-10 w-80 h-auto" />
      </div>
    </section>
  );
}