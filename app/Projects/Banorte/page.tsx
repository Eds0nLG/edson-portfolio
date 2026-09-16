export default function BanortePage() {
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
                        Project · 02
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                        Banorte App
                    </h1>

                    <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
                        Mobile application concept focused on making saving easier
                        through an intuitive visual experience and automated
                        transfers.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {["Swift", "SwiftUI", "Xcode", "Chatbot"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project concept */}
            <section className="border-t border-white/10 px-6 py-20">
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.5fr_1fr]">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                            About the project
                        </p>

                        <h2 className="text-3xl font-bold">
                            A different approach to saving
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-400">
                            The project proposes a saving solution within a mobile
                            application, using a visual metaphor based on a plant
                            to make the saving process simpler, more intuitive,
                            and easier to understand.
                        </p>

                        <p className="mt-4 leading-8 text-zinc-400">
                            The concept also incorporates automation to perform
                            transfers automatically, reducing the manual interaction
                            required to maintain a consistent saving habit.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="font-semibold">
                            Technologies
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-zinc-400">
                            <div>
                                <p className="text-zinc-200">Language</p>
                                <p className="mt-1">Swift</p>
                            </div>

                            <div>
                                <p className="text-zinc-200">Interface</p>
                                <p className="mt-1">SwiftUI</p>
                            </div>

                            <div>
                                <p className="text-zinc-200">Development</p>
                                <p className="mt-1">Xcode</p>
                            </div>

                            <div>
                                <p className="text-zinc-200">Interaction</p>
                                <p className="mt-1">Chatbot</p>
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
                        Automation and user experience
                    </h2>

                    <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                        I contributed to the development of features related to
                        automated transfers and user interaction with the saving
                        concept.
                    </p>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">💰</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Automated transfers
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                I contributed to the functionality that allowed
                                transfers to be automated, enabling deposits to
                                be scheduled.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">👤</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Recipient selection
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                I worked on the interaction required to select the
                                person who would receive the automated deposit.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">🌱</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Saving experience
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                The concept used a visual metaphor of a plant to
                                represent the growth of savings and make the process
                                more intuitive for the user.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">📱</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Mobile development
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                The project was developed as a mobile application
                                concept using Swift and SwiftUI within Xcode.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual concept */}
            <section className="border-t border-white/10 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Visual concept
                    </p>

                    <h2 className="text-3xl font-bold">
                        An interface designed to make saving visible
                    </h2>

                    <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                        The concept uses visual elements to represent saving
                        progress and make the available actions within the
                        application easier to understand.
                    </p>

                    {/* Image */}
                    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                        <img
                            src="/Proyectos/Banorte/app-banorte.jpeg"
                            alt="Banorte mobile application interface"
                            className="mx-auto h-auto max-h-[700px] w-auto max-w-full object-contain"
                        />
                    </div>

                    <p className="mt-4 text-center text-sm text-zinc-500">
                        Mobile application concept preview.
                    </p>
                </div>
            </section>

            {/* Project highlights */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Highlights
                    </p>

                    <h2 className="text-3xl font-bold">
                        Experience-driven design
                    </h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-3xl">🌱</p>

                            <h3 className="mt-5 font-semibold">
                                Visual metaphor
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                The growth of a plant visually represents the
                                progress of the user's savings.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-3xl">⚡</p>

                            <h3 className="mt-5 font-semibold">
                                Automation
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Automated transfers reduce the need to manually
                                complete each deposit.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-3xl">💡</p>

                            <h3 className="mt-5 font-semibold">
                                Simplicity
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                The experience aims to turn a financial action
                                into a simpler and more intuitive process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Repository / Availability */}
            <section className="border-t border-white/10 px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Project
                    </p>

                    <h2 className="text-3xl font-bold">
                        Concept developed during the project
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
                        This project was developed as a mobile application
                        concept. It currently does not have a publicly available
                        repository.
                    </p>
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