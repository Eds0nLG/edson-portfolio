export default function InfrastructureAsCodePage() {
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
                        Project · 03
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                        Infrastructure as Code
                    </h1>

                    <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
                        Infrastructure creation, automation, and configuration project
                        using code to deploy and manage servers on AWS.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {["Terraform", "AWS", "Linux", "Ubuntu", "Ansible"].map((tech) => (
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

            {/* About the project */}
            <section className="border-t border-white/10 px-6 py-20">
                <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.5fr_1fr]">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                            About the project
                        </p>

                        <h2 className="text-3xl font-bold">
                            Infrastructure defined through code
                        </h2>

                        <p className="mt-6 leading-8 text-zinc-400">
                            The project consisted of creating an infrastructure composed
                            of one central node and six worker nodes, distributed across
                            three Linux nodes and three Ubuntu nodes.
                        </p>

                        <p className="mt-4 leading-8 text-zinc-400">
                            The infrastructure was implemented using Terraform and
                            complemented with node configuration and management through
                            Ansible. The provisioned resources were subsequently reviewed
                            through the AWS console.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="font-semibold">
                            Technologies
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-zinc-400">
                            <div>
                                <p className="text-zinc-200">
                                    Infrastructure as Code
                                </p>
                                <p className="mt-1">Terraform</p>
                            </div>

                            <div>
                                <p className="text-zinc-200">
                                    Cloud
                                </p>
                                <p className="mt-1">AWS</p>
                            </div>

                            <div>
                                <p className="text-zinc-200">
                                    Operating systems
                                </p>
                                <p className="mt-1">
                                    Linux · Ubuntu
                                </p>
                            </div>

                            <div>
                                <p className="text-zinc-200">
                                    Configuration
                                </p>
                                <p className="mt-1">Ansible</p>
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
                        Infrastructure creation and automation
                    </h2>

                    <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                        I participated in creating the infrastructure through code,
                        working with Terraform and reviewing the resources deployed
                        on AWS.
                    </p>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">🏗️</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Terraform
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                I used Terraform to define and provision the infrastructure
                                through configuration files, avoiding reliance on manual
                                resource creation.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">☁️</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                AWS
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                I reviewed the provisioned resources through the AWS console
                                to verify the created infrastructure.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">🐧</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Worker nodes
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                The infrastructure included six worker nodes:
                                three Linux nodes and three Ubuntu nodes, coordinated
                                through a central node.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="text-2xl">⚙️</div>

                            <h3 className="mt-4 text-xl font-semibold">
                                Ansible
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                Ansible inventory and playbooks were used as part of the
                                configuration and management of the nodes.
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
                        Central node + six worker nodes
                    </h2>

                    <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                        The infrastructure was organized around a central node connected
                        to six worker nodes: three Linux nodes and three Ubuntu nodes.
                    </p>

                    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
                        <div className="mx-auto max-w-3xl">
                            {/* Central node */}
                            <div className="mx-auto max-w-sm rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
                                <div className="text-3xl">🖥️</div>

                                <h3 className="mt-3 font-semibold">
                                    Central node
                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">
                                    Main coordination node
                                </p>
                            </div>

                            {/* Connection */}
                            <div className="mx-auto h-10 w-px bg-white/20" />

                            {/* Node groups */}
                            <div className="grid gap-8 md:grid-cols-2">
                                {/* Linux nodes */}
                                <div>
                                    <div className="mb-4 text-center">
                                        <h3 className="font-semibold">
                                            Linux nodes
                                        </h3>

                                        <p className="mt-1 text-xs text-zinc-500">
                                            3 worker nodes
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Linux 1
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Linux 2
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Linux 3
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Ubuntu nodes */}
                                <div>
                                    <div className="mb-4 text-center">
                                        <h3 className="font-semibold">
                                            Ubuntu nodes
                                        </h3>

                                        <p className="mt-1 text-xs text-zinc-500">
                                            3 worker nodes
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Ubuntu 1
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Ubuntu 2
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                                            <div className="text-xl">🐧</div>

                                            <p className="mt-2 text-sm font-medium">
                                                Ubuntu 3
                                            </p>

                                            <p className="mt-1 text-xs text-zinc-500">
                                                Worker node
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total nodes */}
                            <div className="mt-8 rounded-xl border border-white/10 bg-zinc-900/70 p-4 text-center">
                                <p className="text-sm text-zinc-400">
                                    Total infrastructure
                                </p>

                                <p className="mt-1 text-lg font-semibold">
                                    7 nodes
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    1 central node · 3 Linux nodes · 3 Ubuntu nodes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Workflow
                    </p>

                    <h2 className="text-3xl font-bold">
                        From code to infrastructure
                    </h2>

                    <div className="mt-10 grid gap-4 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-blue-500">
                                01
                            </p>

                            <h3 className="mt-4 font-semibold">
                                Definition
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                The infrastructure is defined through Terraform configuration files.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-blue-500">
                                02
                            </p>

                            <h3 className="mt-4 font-semibold">
                                Provisioning
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Terraform provisions the resources defined for the infrastructure.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-blue-500">
                                03
                            </p>

                            <h3 className="mt-4 font-semibold">
                                Configuration
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                Ansible is used to work with the inventory and configuration
                                of the nodes.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <p className="text-sm text-blue-500">
                                04
                            </p>

                            <h3 className="mt-4 font-semibold">
                                Verification
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                The provisioned resources are reviewed through the AWS console.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Evidence */}
            <section className="border-t border-white/10 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Evidence
                    </p>

                    <h2 className="text-3xl font-bold">
                        Infrastructure in action
                    </h2>

                    <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                        You can view a demonstration of the project and the infrastructure
                        creation process.
                    </p>

                    {/* Video */}
                    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                        <div className="flex min-h-[260px] items-center justify-center p-8">
                            <div className="text-center">
                                <div className="text-5xl">▶</div>

                                <h3 className="mt-5 text-xl font-semibold">
                                    Project demonstration
                                </h3>

                                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-400">
                                    Video demonstration of the infrastructure and the work
                                    completed during the project.
                                </p>

                                <a
                                    href="https://www.youtube.com/watch?v=EnBb9MLge_I"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                                >
                                    Watch demonstration on YouTube ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project summary */}
            <section className="border-t border-white/10 bg-zinc-900/40 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        What I learned
                    </p>

                    <h2 className="text-3xl font-bold">
                        Infrastructure automation and management
                    </h2>

                    <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
                        This project provided hands-on experience with Infrastructure as
                        Code, automation, Linux servers, and cloud services, using tools
                        such as Terraform, AWS, and Ansible.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "Infrastructure as Code",
                            "Cloud Computing",
                            "Terraform",
                            "AWS",
                            "Linux",
                            "Ubuntu",
                            "Ansible",
                            "Automation",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                            >
                                {item}
                            </span>
                        ))}
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

