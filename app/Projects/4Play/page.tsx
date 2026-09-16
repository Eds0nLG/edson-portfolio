export default function FourPlayPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to home
          </a>

          <span className="text-xl font-bold">
            Edson<span className="text-blue-500">.</span>
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Featured Project · 01
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            4Play
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
            Web platform for booking and managing sports courts, developed with
            a separate frontend and backend architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Vue 3",
              "Vite",
              "Vuetify",
              "Django",
              "Django REST Framework",
              "FullCalendar",
              "Git",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/KzrysztMansur/FourPlay-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Frontend ↗
            </a>

            <a
              href="https://github.com/KzrysztMansur/FourPlay-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              View Backend ↗
            </a>
          </div>
        </div>
      </section>

      {/* Project screenshots */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Application
          </p>

          <h2 className="text-3xl font-bold">
            See 4Play in action
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            Some views of the platform and the features I contributed to during
            the development of the project.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Screenshot 1 */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <img
                src="/Proyectos/4Play/inicio.png"
                alt="4Play main screen"
                className="h-auto w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">Main Interface</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  General view of the platform and main navigation.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <img
                src="/Proyectos/4Play/calendario.png"
                alt="4Play booking calendar"
                className="h-auto w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">Booking Calendar</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Feature I contributed to on both the backend side and the
                  frontend visualization and interaction.
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 md:col-span-2">
              <img
                src="/Proyectos/4Play/estadisticas.png"
                alt="4Play statistics"
                className="h-auto w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">Statistics</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  View of statistical information obtained, processed, and
                  presented within the application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the project */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
              About the project
            </p>

            <h2 className="text-3xl font-bold">
              A platform for managing sports facilities
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              4Play is an application focused on managing and booking sports
              courts. The system includes features for managing users,
              bookings, calendars, statistics, and different actions within
              the platform.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              The project features a frontend developed with Vue and a backend
              built with Django REST Framework, separating the user interface
              from the application's logic and services.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Technology Stack</h3>

            <div className="mt-5 space-y-4 text-sm text-zinc-400">
              <div>
                <p className="text-zinc-200">Frontend</p>
                <p className="mt-1">Vue 3 · Vite · Vuetify</p>
              </div>

              <div>
                <p className="text-zinc-200">Backend</p>
                <p className="mt-1">Django · Django REST Framework</p>
              </div>

              <div>
                <p className="text-zinc-200">Calendar</p>
                <p className="mt-1">FullCalendar</p>
              </div>

              <div>
                <p className="text-zinc-200">Version Control</p>
                <p className="mt-1">Git · GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My contribution */}
      <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            My contribution
          </p>

          <h2 className="text-3xl font-bold">
            Frontend & Backend Development
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            I directly contributed to the development of features across both
            the frontend and backend, working on the integration between the
            user interface and the application's services.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl">📅</div>

              <h3 className="mt-4 text-xl font-semibold">
                Calendar
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                I contributed to the development of the calendar feature,
                working on the backend as well as its visualization and
                interaction on the frontend.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl">📊</div>

              <h3 className="mt-4 text-xl font-semibold">
                Statistics
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                I worked on statistics-related features, contributing to the
                retrieval, processing, and presentation of information within
                the application.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl">👥</div>

              <h3 className="mt-4 text-xl font-semibold">
                Roles
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                I contributed to implementing role-related features and the
                actions available according to the type of user.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl">⚙️</div>

              <h3 className="mt-4 text-xl font-semibold">
                Integration
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                I worked on features that required interaction between the
                frontend and backend, contributing to the overall functionality
                of the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Architecture
          </p>

          <h2 className="text-3xl font-bold">
            Frontend + API + Backend
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            The application uses a separated architecture, where the frontend
            consumes services exposed by the backend through an API.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl">🖥️</div>

              <h3 className="mt-4 font-semibold">
                Frontend
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Vue 3 + Vite + Vuetify
              </p>
            </div>

            <div className="flex items-center justify-center text-2xl text-blue-500">
              →
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl">⚙️</div>

              <h3 className="mt-4 font-semibold">
                Backend
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Django + Django REST Framework
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repository */}
      <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Code
          </p>

          <h2 className="text-3xl font-bold">
            Explore the project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            The project is divided into independent repositories for the
            frontend and backend.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/KzrysztMansur/FourPlay-Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Frontend on GitHub ↗
            </a>

            <a
              href="https://github.com/KzrysztMansur/FourPlay-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              View Backend on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <a
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to portfolio
          </a>

          <span className="text-sm text-zinc-500">
            © 2026 Edson
          </span>
        </div>
      </footer>
    </main>
  );
}