export default function BigDataPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <a href="/" className="text-xl font-bold">
                        PORTFOLIO<span className="text-blue-500">.</span>
                    </a>

                    <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
                        <a href="/#about" className="transition hover:text-white">
                            About
                        </a>

                        <a href="/#skills" className="transition hover:text-white">
                            Skills
                        </a>

                        <a href="/#projects" className="transition hover:text-white">
                            Projects
                        </a>

                        <a href="/#contact" className="transition hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="px-6 pb-20 pt-36">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                        Project 04
                    </p>

                    <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                        Big Data
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        Data analysis and processing project focused on studying
                        diabetes-related hypotheses using data obtained from Kaggle
                        and prediction models.
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
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
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project link */}
                    <div className="mt-8">
                        <a
                            href="https://colab.research.google.com/drive/1LEgnQAIACVNqyJt1WzStorcAHcG0xjE_?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                        >
                            View project in Colab ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="border-t border-white/10 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        About the project
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Data analysis and prediction models.
                    </h2>

                    <div className="mt-10 grid gap-12 md:grid-cols-2">
                        <div>
                            <p className="leading-8 text-zinc-400">
                                The Big Data integrative project focused on analyzing
                                diabetes-related information using a dataset obtained
                                from Kaggle.
                            </p>

                            <p className="mt-5 leading-8 text-zinc-400">
                                Based on the available information, five hypotheses were
                                proposed, and prediction models were used to obtain answers
                                to the questions raised.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-2xl">📊</div>

                                <h3 className="mt-4 font-semibold">
                                    Data analysis
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    Data processing and analysis to study the proposed
                                    hypotheses.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-2xl">🧠</div>

                                <h3 className="mt-4 font-semibold">
                                    Prediction
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    Use of prediction models to obtain answers to the
                                    proposed hypotheses.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-2xl">📁</div>

                                <h3 className="mt-4 font-semibold">
                                    Dataset
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    Diabetes-related information obtained from Kaggle.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-2xl">🔎</div>

                                <h3 className="mt-4 font-semibold">
                                    Hypotheses
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    Five hypotheses proposed to analyze the data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Stack
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Technologies used
                    </h2>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Python */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">🐍</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                Python
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Programming language used for data analysis and
                                processing.
                            </p>
                        </div>

                        {/* PySpark */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">⚡</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                PySpark
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Tool used to work with data processing within the
                                project.
                            </p>
                        </div>

                        {/* Pandas */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">🐼</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                Pandas
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Used to work with and analyze the data involved in
                                the project.
                            </p>
                        </div>

                        {/* Matplotlib */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">📈</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                Matplotlib
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Used to generate charts and visually represent the
                                analysis results.
                            </p>
                        </div>

                        {/* Google Colab */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">☁️</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                Google Colab
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Environment used to develop and run the analysis
                                project.
                            </p>
                        </div>

                        {/* Kaggle */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
                            <div className="text-2xl">📚</div>

                            <h3 className="mt-4 text-lg font-semibold">
                                Kaggle
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Source of the data used to develop the analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Participation */}
            <section className="border-t border-white/10 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        My contribution
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Work completed
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                        My contribution focused primarily on solving three of the
                        five proposed hypotheses, using the prediction model to
                        obtain the corresponding answers.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {/* Hypothesis 1 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                            <span className="text-sm font-medium text-blue-500">
                                01
                            </span>

                            <h3 className="mt-4 text-xl font-semibold">
                                Hypothesis
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                A higher body mass index is associated with a higher
                                risk of diabetes.
                            </p>
                        </div>

                        {/* Hypothesis 2 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                            <span className="text-sm font-medium text-blue-500">
                                02
                            </span>

                            <h3 className="mt-4 text-xl font-semibold">
                                Hypothesis
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                The combined analysis of metabolic variables improves
                                diabetes risk identification compared with analyzing
                                a single variable individually.
                            </p>
                        </div>

                        {/* Hypothesis 3 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                            <span className="text-sm font-medium text-blue-500">
                                03
                            </span>

                            <h3 className="mt-4 text-xl font-semibold">
                                Hypothesis
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Age has a positive influence on diabetes risk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Workflow
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        From dataset to results.
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <span className="text-sm font-medium text-blue-500">
                                01
                            </span>

                            <h3 className="mt-4 font-semibold">
                                Data
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Obtaining diabetes-related information from Kaggle.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <span className="text-sm font-medium text-blue-500">
                                02
                            </span>

                            <h3 className="mt-4 font-semibold">
                                Processing
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Preparing and processing the data using Python,
                                Pandas, and PySpark.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <span className="text-sm font-medium text-blue-500">
                                03
                            </span>

                            <h3 className="mt-4 font-semibold">
                                Prediction
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Feeding the model with the required data to obtain
                                answers.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <span className="text-sm font-medium text-blue-500">
                                04
                            </span>

                            <h3 className="mt-4 font-semibold">
                                Visualization
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Graphical representation of information and results
                                using Matplotlib.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visualizations */}
            <section className="border-t border-white/10 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Visualizations
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Analysis results
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                        Some of the visualizations used to analyze factors related
                        to diabetes risk and the results obtained through data
                        processing.
                    </p>

                    <div className="mt-12 grid gap-8 lg:grid-cols-2">
                        {/* BMI Chart */}
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <div className="border-b border-white/10 p-6">
                                <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                                    Analysis 01
                                </p>

                                <h3 className="mt-3 text-xl font-bold">
                                    Effect of BMI on diabetes risk
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Visualization of the estimated probability of high
                                    risk based on body mass index.
                                </p>
                            </div>

                            <div className="bg-zinc-900 p-4 sm:p-6">
                                <img
                                    src="/Proyectos/BigData/imc-riesgo.png"
                                    alt="Chart showing the effect of BMI on diabetes risk"
                                    className="h-auto w-full rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Averages Chart */}
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <div className="border-b border-white/10 p-6">
                                <p className="text-sm font-medium uppercase tracking-widest text-blue-500">
                                    Analysis 02
                                </p>

                                <h3 className="mt-3 text-xl font-bold">
                                    Averages by risk category
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Comparison of average glucose, insulin, and age
                                    values across the different risk categories.
                                </p>
                            </div>

                            <div className="bg-zinc-900 p-4 sm:p-6">
                                <img
                                    src="/Proyectos/BigData/promedios-riesgo.png"
                                    alt="Average glucose, insulin, and age values by risk category"
                                    className="h-auto w-full rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project summary */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Project
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Data-driven analysis.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
                        This project allowed me to apply data processing, analysis,
                        visualization, and prediction tools to study diabetes-related
                        information and address hypotheses based on the available data.
                    </p>

                    <div className="mt-8">
                        <a
                            href="https://colab.research.google.com/drive/1LEgnQAIACVNqyJt1WzStorcAHcG0xjE_?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                        >
                            Open project in Google Colab ↗
                        </a>
                    </div>
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