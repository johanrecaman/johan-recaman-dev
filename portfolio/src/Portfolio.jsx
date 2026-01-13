import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Brain,
  Wrench
} from "lucide-react"

import faceImg from './assets/face.jpeg'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      tech: ["React", "Tailwindcss", "TypeScript", "JavaScript", "FlutterFlow"],
    },
    {
      name: "Tools",
      icon: Wrench,
      color: "from-purple-400 to-pink-400",
      tech: ["Git", "GitHub", "Docker", "Linux", "MacOS", "Windows", "Figma", "Excel", "PowerPoint"],
    },
    {
      name: "Backend Development",
      icon: Database,
      color: "from-green-400 to-emerald-400",
      tech: ["Node.js", "Express", "Python", "Flask", "Go", "Ruby on Rails", "Java", "C", "C++", "Rust", "PHP"],
    },
    {
      name: "Web Technologies",
      icon: Globe,
      color: "from-orange-400 to-red-400",
      tech: ["HTML5", "CSS3", "JavaScript", "REST APIs", "GraphQL"],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-400 to-blue-400",
      tech: ["React Native", "Flutter", "FlutterFlow", "Swift"],
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-pink-400 to-rose-400",
      tech: ["LangGraph", "LangChain", "OpenAI", "Data Processing"],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Anki App",
      description: "Plataforma completa de e-commerce com painel administrativo",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription:
        "Uma plataforma de e-commerce completa construída com React e Node.js. Inclui sistema de autenticação, carrinho de compras, processamento de pagamentos com Stripe, painel administrativo para gerenciar produtos e pedidos, e dashboard com analytics em tempo real.",
      features: [
        "Sistema de autenticação JWT",
        "Carrinho de compras persistente",
        "Integração com Stripe",
        "Dashboard administrativo",
        "Analytics em tempo real",
        "Responsive design",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription:
        "Aplicativo de produtividade para gerenciamento de tarefas e projetos com recursos de colaboração em tempo real. Construído como PWA para funcionar offline.",
      features: [
        "Colaboração em tempo real",
        "Modo offline (PWA)",
        "Drag & drop interface",
        "Notificações push",
        "Relatórios de produtividade",
        "Integração com calendário",
      ],
    },
    {
      id: 3,
      title: "AI-Powered Reminders App",
      description: "Dashboard inteligente com insights baseados em IA",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription:
        "Dashboard avançado que utiliza machine learning para gerar insights automáticos a partir de dados de negócio. Visualizações interativas e predições em tempo real.",
      features: [
        "Machine Learning integrado",
        "Visualizações D3.js",
        "Predições em tempo real",
        "Processamento de Big Data",
        "Relatórios automatizados",
        "API RESTful",
      ],
    },
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${darkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"}`}
    >
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Circles */}
        <div
          className={`absolute top-20 left-10 w-32 h-32 rounded-full ${darkMode ? "bg-blue-500/10" : "bg-blue-200/30"} animate-pulse`}
        ></div>
        <div
          className={`absolute top-1/3 right-20 w-24 h-24 rounded-full ${darkMode ? "bg-purple-500/10" : "bg-purple-200/30"} animate-bounce`}
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full ${darkMode ? "bg-cyan-500/10" : "bg-cyan-200/30"} animate-pulse`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute bottom-20 right-1/3 w-20 h-20 rounded-full ${darkMode ? "bg-pink-500/10" : "bg-pink-200/30"} animate-bounce`}
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>

        {/* Geometric Shapes */}
        <div
          className={`absolute top-1/2 left-5 w-12 h-12 ${darkMode ? "bg-blue-400/10" : "bg-blue-300/20"} transform rotate-45 animate-spin`}
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className={`absolute top-3/4 right-10 w-8 h-8 ${darkMode ? "bg-purple-400/10" : "bg-purple-300/20"} transform rotate-12 animate-pulse`}
        ></div>

        {/* Gradient Blobs */}
        <div
          className={`absolute -top-20 -right-20 w-80 h-80 ${darkMode ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5" : "bg-gradient-to-br from-blue-200/20 to-purple-200/20"} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute -bottom-20 -left-20 w-96 h-96 ${darkMode ? "bg-gradient-to-tr from-cyan-500/5 to-pink-500/5" : "bg-gradient-to-tr from-cyan-200/20 to-pink-200/20"} rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 ${darkMode ? "opacity-5" : "opacity-10"}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? "rgb(59, 130, 246)" : "rgb(147, 197, 253)"} 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${darkMode ? "bg-gray-900/90" : "bg-white/90"} border-b ${darkMode ? "border-gray-800" : "border-blue-100"} shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:scale-105 relative ${
                    activeSection === section
                      ? "text-blue-500 font-semibold"
                      : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 shadow-lg shadow-yellow-400/20"
                  : "bg-blue-100 text-blue-600 shadow-lg shadow-blue-200/50"
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 relative group">
            <div className="w-60 h-60 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 shadow-2xl shadow-blue-200/50 dark:shadow-blue-500/20 relative">
              <img
                src={faceImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Animated rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-blue-300/30 animate-pulse"></div>
              <div
                className="absolute -inset-8 rounded-full border border-cyan-300/20 animate-ping"
                style={{ animationDuration: "2s" }}
              ></div>
              <div
                className="absolute -inset-12 rounded-full border border-blue-200/10 animate-pulse"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              ></div>
            </div>
          </div>

          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
            <span className="inline-block hover:scale-110 transition-transform duration-300">Johan</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Recaman
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto leading-relaxed`}
          >
           Full-stack developer que prioriza eficiência, qualidade e simplicidade no código para resolver problemas reais, garantindo que as aplicações sejam robustas e fáceis de evoluir.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, url: "https://github.com/johanrecaman", label: "GitHub" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/johanrecaman/", label: "LinkedIn" },
              { icon: Mail, url: "mailto:johanstrr@gmail.com", label: "Email" },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-800 text-gray-300 hover:text-white shadow-lg shadow-gray-800/50"
                    : "bg-white text-gray-600 hover:text-blue-600 shadow-lg shadow-blue-100/50"
                } hover:shadow-xl backdrop-blur-sm`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Conheça meu trabalho</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 relative ${darkMode ? "bg-gray-800/50" : "bg-white/80"} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Sobre <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
               Tenho uma base sólida e gosto de resolver problemas com soluções simples, eficientes e bem pensadas. Busco sempre entender a raiz do problema antes de escrever qualquer linha de código, e acredito que clareza e organização valem mais do que “gambiarras rápidas”.
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Trabalho com foco em entregar valor, com código limpo, boa estrutura e atenção aos detalhes. Me adapto bem a diferentes contextos e tenho facilidade para aprender novas tecnologias quando o projeto exige.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { label: "Resolução de problemas", value: "100%" },
                  { label: "Clientes", value: "30+" },
                  { label: "Objetivo", value: "1" },
                  { label: "Linhas de código", value: "∞" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center group">
                    <div
                      className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} group-hover:text-blue-500 transition-colors duration-300`}
                    >
                      {value}
                    </div>
                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl transform rotate-6 ${darkMode ? "opacity-20" : "opacity-20"} blur-sm`}
              ></div>
              <div
                className={`relative p-8 rounded-2xl ${darkMode ? "bg-gray-700/80" : "bg-blue-50/80"} backdrop-blur-sm border ${darkMode ? "border-gray-600" : "border-blue-100"} shadow-xl`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Meu Objetivo
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed italic`}>
                   "Almejo atuar em um time onde eu possa aplicar minha capacidade de raciocínio lógico e continuar evoluindo como desenvolvedor. Quero contribuir com soluções que resolvam dores reais, que sejam escaláveis e intuitivas para quem usa. Meu foco está em construir algo que realmente tenha um impacto positivo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 relative ${darkMode ? "bg-gray-900/50" : "bg-gradient-to-br from-blue-50/80 to-cyan-50/80"} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Minhas{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  darkMode ? "bg-gray-800/80 hover:bg-gray-700/80" : "bg-white/80 hover:bg-white/90"
                } shadow-lg hover:shadow-2xl backdrop-blur-sm border ${darkMode ? "border-gray-700 hover:border-gray-600" : "border-blue-100 hover:border-blue-200"} relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className={`relative text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"} group-hover:text-blue-500 transition-colors duration-300`}
                >
                  {skill.name}
                </h3>

                <div className="relative flex flex-wrap gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? `bg-gray-600 text-gray-400 ${
                              skill.color.includes("blue")
                                ? "group-hover:bg-blue-500"
                                : skill.color.includes("purple")
                                  ? "group-hover:bg-purple-500"
                                  : skill.color.includes("green")
                                    ? "group-hover:bg-green-500"
                                    : skill.color.includes("orange")
                                      ? "group-hover:bg-orange-500"
                                      : skill.color.includes("indigo")
                                        ? "group-hover:bg-indigo-500"
                                        : "group-hover:bg-pink-500"
                            } group-hover:text-white`
                          : `bg-gray-200 text-gray-600 ${
                              skill.color.includes("blue")
                                ? "group-hover:bg-blue-500"
                                : skill.color.includes("purple")
                                  ? "group-hover:bg-purple-500"
                                  : skill.color.includes("green")
                                    ? "group-hover:bg-green-500"
                                    : skill.color.includes("orange")
                                      ? "group-hover:bg-orange-500"
                                      : skill.color.includes("indigo")
                                        ? "group-hover:bg-indigo-500"
                                        : "group-hover:bg-pink-500"
                            } group-hover:text-white`
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 relative ${darkMode ? "bg-gray-800/50" : "bg-white/80"} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projetos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  darkMode ? "bg-gray-700/80 hover:bg-gray-600/80" : "bg-blue-50/80 hover:bg-white/90"
                } shadow-lg hover:shadow-2xl backdrop-blur-sm border ${darkMode ? "border-gray-600" : "border-blue-100"} relative`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3
                    className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"} group-hover:text-blue-500 transition-colors duration-300`}
                  >
                    {project.title}
                  </h3>

                  <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs transition-colors duration-300 ${
                          darkMode
                            ? "bg-gray-600 text-gray-300 group-hover:bg-gray-500"
                            : "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-500 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Ver mais
                    </button>

                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                          darkMode
                            ? "bg-gray-600 text-gray-300 hover:text-white hover:bg-blue-600"
                            : "bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                          darkMode
                            ? "bg-gray-600 text-gray-300 hover:text-white hover:bg-gray-500"
                            : "bg-blue-100 text-blue-600 hover:text-white hover:bg-gray-600"
                        }`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              darkMode ? "bg-gray-800/95" : "bg-white/95"
            } shadow-2xl transform transition-all duration-300 backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-blue-100"}`}
          >
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  darkMode ? "bg-gray-700/80 text-white hover:bg-gray-600" : "bg-white/80 text-gray-900 hover:bg-white"
                } hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {selectedProject.title}
              </h3>

              <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                {selectedProject.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Principais Funcionalidades
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver Projeto</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 hover:scale-105 transition-all duration-300 ${
                    darkMode
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                      : "border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
                  }`}
                >
                  <Github className="w-5 h-5" />
                  <span>Ver Código</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`py-12 relative ${darkMode ? "bg-gray-900/80 border-t border-gray-800" : "bg-blue-50/80 border-t border-blue-100"} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2025 Johan Recaman
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

