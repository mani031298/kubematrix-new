export default function MatrixKubeWebsite() {
  const services = [
    {
      title: 'Cloud Consulting',
      desc: 'Cloud migration, architecture design, governance, cost optimization, and Infrastructure as Code.',
    },
    {
      title: 'Kubernetes Solutions',
      desc: 'Production-ready Kubernetes clusters, containerization, Helm, monitoring, and security hardening.',
    },
    {
      title: 'DevSecOps Services',
      desc: 'CI/CD automation, vulnerability scanning, secure SDLC, compliance, and infrastructure security.',
    },
    {
      title: 'Professional Training',
      desc: 'Hands-on cloud, DevOps, Kubernetes, Terraform, Docker, and enterprise DevSecOps training.',
    },
  ];

  const trainingTopics = [
    'AWS / Azure / GCP Training',
    'Kubernetes & Docker Hands-On Labs',
    'Terraform & Infrastructure as Code',
    'CI/CD Pipeline Engineering',
    'DevSecOps & Cloud Security',
  ];

  return (
    <div className="bg-[#f5f5f7] text-[#1e1e1e] overflow-hidden font-sans">
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src="https://iili.io/FrLOG8P.png"
              alt="MatrixKube Logo"
              className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,255,255,0.25)]"
            />

            <div>
              <h1 className="text-3xl md:text-4xl font-light tracking-wide leading-none">
                <span className="text-white font-semibold">Matrix</span>
                <span className="text-[#62E6D8] font-medium">Kube</span>
              </h1>

              <p className="text-[11px] md:text-sm uppercase tracking-[0.28em] text-cyan-100 mt-3 font-light">
                Trusted Cloud & DevOps Consulting Partner
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-white uppercase tracking-wider">
            <a href="#home" className="hover:text-cyan-300 transition">Home</a>
            <a href="#services" className="hover:text-cyan-300 transition">Services</a>
            <a href="#training" className="hover:text-cyan-300 transition">Training</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
          </nav>

          <button className="hidden lg:block px-6 py-3 bg-[#5a43d6] text-white rounded-sm text-sm uppercase tracking-widest hover:bg-[#4b38ba] transition">
            Get a Quote
          </button>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
            alt="cloud office"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#091224]/95 via-[#3d2d73]/70 to-[#5a43d6]/60" />
        </div>

        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-[420px] h-[420px] bg-[#6b5ce7]/30 rotate-45 backdrop-blur-sm border border-white/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-cyan-200 uppercase tracking-[0.25em] text-xs">
              Trusted Cloud & DevOps Consulting Partner
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white uppercase tracking-wide">
              Empower Your
              <span className="block text-cyan-300">Cloud Journey</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-200 max-w-xl">
              We help enterprises modernize infrastructure with cloud-native solutions, Kubernetes implementation, DevSecOps automation, professional corporate training, and enterprise consulting support for Volvo Cars.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="px-8 py-4 bg-white text-[#3d2d73] uppercase tracking-widest text-sm font-semibold hover:bg-slate-200 transition">
                Get Consultation
              </button>

              <button className="px-8 py-4 border border-white/30 text-white uppercase tracking-widest text-sm hover:bg-white/10 transition">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#ece8ff] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.35em] text-[#6b5ce7] text-sm font-semibold">
              What We Do
            </p>

            <h2 className="text-5xl font-bold mt-6 text-[#1d1d1f] uppercase tracking-wide">
              Modern Cloud Transformation
            </h2>

            <p className="mt-6 text-slate-600 leading-8 text-lg">
              MatrixKubeTechnologies delivers enterprise-grade cloud, Kubernetes, DevSecOps, enterprise consulting, and training solutions designed for scalability, reliability, and security.
            </p>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#eef6ff] to-[#f3ecff] border border-[#d9d9ff] rounded-3xl p-10 shadow-lg text-center">
            <p className="uppercase tracking-[0.35em] text-[#5a43d6] text-sm font-semibold">
              Enterprise Consulting Experience
            </p>

            <h3 className="text-4xl font-bold text-[#1d1d1f] mt-5 uppercase tracking-wide">
              Trusted Consulting Partner For Volvo Cars
            </h3>

            <p className="mt-6 text-slate-600 text-lg leading-8 max-w-3xl mx-auto">
              MatrixKubeTechnologies provides cloud, Kubernetes, DevSecOps,
              and infrastructure consulting support aligned with enterprise-grade
              automotive and large-scale platform requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative bg-white rounded-sm border border-[#ececec] p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#4fd1ff] to-[#5a43d6]" />

                <div className="w-16 h-16 rounded-full bg-[#ede9ff] flex items-center justify-center text-[#5a43d6] text-2xl font-bold mb-8">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold text-[#222] uppercase tracking-wide mb-5">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-8 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="py-28 bg-[#f8f7fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#6b5ce7] text-sm font-semibold">
              Corporate Training
            </p>

            <h2 className="text-5xl font-bold mt-6 leading-tight uppercase text-[#1d1d1f]">
              Upskilling IT Professionals With Real Industry Practices
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-9">
              We provide enterprise workshops, DevOps bootcamps, cloud certification preparation,
              and customized corporate training programs for modern infrastructure teams.
            </p>

            <div className="mt-10 space-y-4">
              {trainingTopics.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white border border-[#ececec] p-5 shadow-sm"
                >
                  <div className="w-3 h-3 rounded-full bg-[#6b5ce7]" />
                  <span className="text-slate-700 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="training"
              className="rounded-sm shadow-2xl object-cover h-[650px] w-full"
            />

            <div className="absolute bottom-10 left-10 bg-[#5a43d6] text-white p-8 max-w-sm shadow-2xl">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                Cloud & DevOps Support
              </h3>

              <p className="mt-4 text-slate-100 leading-7 text-sm">
                Reliable consulting, enterprise implementation, infrastructure modernization,
                and 24/7 cloud-native operational support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative py-24 overflow-hidden bg-[#161326] text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#161326] via-[#2f235a] to-[#5a43d6] opacity-90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-6 uppercase leading-tight">
              Let’s Build Scalable Infrastructure Together
            </h2>

            <p className="mt-8 text-lg text-slate-200 leading-9 max-w-3xl mx-auto">
              Reach out to MatrixKubeTechnologies for cloud consulting,
              Kubernetes implementation, DevSecOps services,
              and enterprise training programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-20 items-start">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <p className="uppercase tracking-[0.25em] text-cyan-200 text-sm">
                  Email Address
                </p>

                <h3 className="text-2xl font-bold mt-4 break-all">
                  founder@matrixkube.in
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <p className="uppercase tracking-[0.25em] text-cyan-200 text-sm">
                  Phone Number
                </p>

                <h3 className="text-2xl font-bold mt-4">
                  +91 90031 50920
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#1d1d1f] mb-8">
                Send Us a Message
              </h3>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.target;
                  const name = form.name.value;
                  const email = form.email.value;
                  const contact = form.contact.value;
                  const message = form.message.value;

                  const subject = encodeURIComponent(
                    `New Consultation Request from ${name}`
                  );

                  const body = encodeURIComponent(
                    `Name: ${name}

Email: ${email}

Contact: ${contact}

Message:
${message}`
                  );

                  window.location.href = `mailto:founder@matrixkube.in?subject=${subject}&body=${body}`;
                }}
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#5a43d6] text-black bg-white"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#5a43d6] text-black bg-white"
                />

                <input
                  name="contact"
                  type="text"
                  placeholder="Contact Number"
                  required
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#5a43d6] text-black bg-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirement"
                  required
                  className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#5a43d6] resize-none text-black bg-white"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#35d0ff] via-[#4fd1ff] to-[#5a43d6] text-white py-4 rounded-xl font-semibold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all duration-300 shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e0c18] text-slate-400 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm uppercase tracking-widest">
          <p>© 2026 MatrixKubeTechnologies</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>Cloud</span>
            <span>Kubernetes</span>
            <span>DevSecOps</span>
            <span>Training</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
