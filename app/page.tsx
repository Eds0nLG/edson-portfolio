export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
            PORTFOLIO<span className="text-blue-500">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Edson Leyva
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Software Engineer focused on building modern, scalable, and functional web and mobile applications, as well as backend solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View my projects
            </a>

            <a
              href="/CV-Edson-Leyva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-sm text-zinc-400">
            <a
              href="https://github.com/Eds0nLG"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/edson-leyva-gonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            About
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Building solutions with code.
          </h2>

          <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-start">
            {/* Información */}
            <div>
              <p className="leading-8 text-zinc-400">
                I am a Software Engineer focused on web and mobile application development. I enjoy building functional, intuitive, and well-structured solutions.
              </p>

              <p className="mt-5 leading-8 text-zinc-400">
                I have worked on projects across both frontend and backend, contributing to features, APIs, databases, and user experiences.
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium text-zinc-300">
                  Areas of interest
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "Full-Stack",
                    "Backend",
                    "Mobile",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/5">
                <div className="text-2xl">💻</div>
                <h3 className="mt-4 font-semibold">
                  Full-Stack Development
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Application development across both frontend and backend.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/5">
                <div className="text-2xl">🌐</div>
                <h3 className="mt-4 font-semibold">
                  Web Applications
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Modern, responsive interfaces focused on user experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/5">
                <div className="text-2xl">⚙️</div>
                <h3 className="mt-4 font-semibold">
                  Backend & APIs
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Business logic, services, and REST API development.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/5">
                <div className="text-2xl">📱</div>
                <h3 className="mt-4 font-semibold">
                  Mobile Development
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Mobile application development using different technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section header */}
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies & Tools
            </h2>

            <p className="mt-4 text-zinc-400">
              Technologies and tools I use to develop web and 
              mobile applications and backend solutions.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Frontend */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">◈</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Frontend
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skill */}
                <span className="rounded-lg border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
                  React
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  TypeScript
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  JavaScript
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Next.js
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Vue.js
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Tailwind CSS
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Vuetify
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  HTML
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  CSS
                </span>
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">⌘</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Backend
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skills */}
                <span className="rounded-lg border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
                  Java
                </span>

                <span className="rounded-lg border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
                  Spring Boot
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Python
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Django
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  C#
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  ASP.NET Core
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  REST APIs
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Entity Framework Core
                </span>
              </div>
            </div>

            {/* Mobile */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">▣</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Mobile
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skill */}
                <span className="rounded-lg border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">
                  Flutter
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Dart
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Swift
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  SwiftUI
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  iOS Development
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Mobile UI
                </span>
              </div>
            </div>

            {/* Databases */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">◫</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Databases
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skills */}
                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  MySQL
                </span>

                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  SQL
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Database Design
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Entity Framework
                </span>
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">⚙</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Tools & DevOps
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skills */}
                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  Git
                </span>

                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  Docker
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  GitHub
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  AWS
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Swagger
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Power BI
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Excel
                </span>
              </div>
            </div>

            {/* Methodologies */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <span className="text-lg">✓</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Methodologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Main skill */}
                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                  Scrum
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Agile
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Teamwork
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Problem Solving
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  API Development
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                  Software Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            A selection of projects I have worked on, combining frontend, backend, APIs, and different software technologies.
          </p>

          {/* Featured Project */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="grid md:grid-cols-[1.15fr_1fr]">
              {/* Project visual */}
              <div className="flex min-h-[320px] items-center justify-center bg-zinc-900 p-8">
                <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-semibold">
                      4Play
                    </span>

                    <span className="text-xs text-blue-400">
                      Featured project
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">
                        Frontend
                      </p>

                      <p className="mt-2 font-medium">
                        Vue 3
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">
                        Backend
                      </p>

                      <p className="mt-2 font-medium">
                        Django
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">
                        API
                      </p>

                      <p className="mt-2 font-medium">
                        DRF
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-zinc-500">
                        Calendar
                      </p>

                      <p className="mt-2 font-medium">
                        FullCalendar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project information */}
              <div className="p-8 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                  Project 01
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  4Play
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                  Web platform for booking and managing sports courts, with calendar, statistics, users, and role-based features.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Vue 3",
                    "Vite",
                    "Vuetify",
                    "Django",
                    "Django REST Framework",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contribution */}
                <div className="mt-8">
                  <p className="text-sm font-semibold text-zinc-200">
                    My contribution
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                    <li>• Frontend & Backend Development</li>
                    <li>• Calendar and reservations</li>
                    <li>• Statistics</li>
                    <li>• User roles and role-based actions</li>
                  </ul>
                </div>

                <a
                  href="/Projects/4Play"
                  className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                >
                  View full project →
                </a>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Banorte */}
            <a
              href="/Projects/Banorte"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Project 02
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                App Banorte
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Mobile app concept focused on making saving easier through a visual experience and automated transfers.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Swift", "SwiftUI", "Xcode"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-white transition group-hover:text-blue-400">
                View project →
              </p>
            </a>

            {/* Infrastructure */}
            <a
              href="/Projects/InfrastructureAsCode"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Project 03
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Infrastructure as Code
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Infrastructure automation using Terraform and AWS, including Linux servers and code-based configuration.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Terraform", "AWS", "Linux", "Ansible"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-white transition group-hover:text-blue-400">
                View project →
              </p>
            </a>

            {/* Big Data */}
            <a
              href="/Projects/BigData"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] md:col-span-2"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                Project 04
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Big Data
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                Data analysis and processing focused on diabetes, using Kaggle data and prediction models to address different hypotheses.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "PySpark",
                  "Pandas",
                  "Matplotlib",
                  "Google Colab",
                  "Kaggle",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-white transition group-hover:text-blue-400">
                View project →
              </p>
            </a>
          </div>


        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-zinc-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's work together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            If you are interested on my profile or would like to discuss a project, feel free to contact me.
          </p>

          <a
            href="mailto:edsonleyvagonzalez@gmail.com?subject=Contact%20from%20my%20portfolio"
            className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Edson. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/Eds0nLG"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/edson-leyva-gonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
