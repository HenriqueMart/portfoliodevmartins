import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Globe } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-400">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/50">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-12">
          <Link href="#" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors font-mono">
            &lt;Dev/&gt;
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium">
              <li>
                <Link href="#about" className="hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 mr-1 font-mono">01.</span>Sobre
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 mr-1 font-mono">02.</span>Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 mr-1 font-mono">03.</span>Projetos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 mr-1 font-mono">04.</span>Contato
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="#contact"
            className="hidden md:block rounded border border-teal-400 px-4 py-2 text-sm font-medium text-teal-400 transition-all hover:bg-teal-400/10"
          >
            Vamos Conversar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col justify-center pt-20">
          <p className="mb-5 font-mono text-base text-teal-400">Olá, meu nome é</p>
          <h1 className="text-5xl font-bold text-slate-200 md:text-7xl text-balance">Henrique Martins.</h1>
          <h2 className="mt-4 text-4xl font-bold text-slate-400 md:text-6xl text-balance">
            Eu construo coisas para a web.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Sou um desenvolvedor front-end especializado em construir (e ocasionalmente projetar) experiências digitais
            excepcionais. Atualmente, estou focado em construir produtos acessíveis e centrados no ser humano.
          </p>
          <div className="mt-12">
            <Link
              href="#projects"
              className="inline-block rounded border border-teal-400 px-8 py-4 text-lg font-medium text-teal-400 transition-all hover:bg-teal-400/10"
            >
              Confira meus projetos!
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="whitespace-nowrap text-2xl font-bold text-slate-200 md:text-3xl">
              <span className="text-teal-400 mr-2 font-mono">01.</span>Sobre Mim
            </h2>
            <div className="h-px w-full max-w-xs bg-slate-700"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Olá! Meu nome é Henrique e gosto de criar coisas que vivem na internet. Meu interesse em desenvolvimento
                web começou em 2022, quando decidi tentar editar temas personalizados no Tumblr — descobri que hackear
                HTML e CSS era muito divertido!
              </p>
              <p>
                Avançando para hoje, tive o privilégio de trabalhar em uma{" "}
                <span className="text-teal-400">agência de publicidade</span> e uma{" "}
                <span className="text-teal-400">start-up</span>. Meu foco principal hoje é construir produtos acessíveis
                e inclusivos.
              </p>
              <p>Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span> Git
                </li>
              </ul>
            </div>
            <div className="relative mx-auto max-w-xs md:mx-0">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded border-2 border-teal-400 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative h-full w-full overflow-hidden rounded bg-teal-400/20">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Profile"
                  className="h-full w-full object-cover mix-blend-multiply grayscale transition-all hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="whitespace-nowrap text-2xl font-bold text-slate-200 md:text-3xl">
              <span className="text-teal-400 mr-2 font-mono">02.</span>Minhas Skills
            </h2>
            <div className="h-px w-full max-w-xs bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: <Code2 className="h-8 w-8" />, title: "Frontend", desc: "HTML, CSS, React" },
              { icon: <Terminal className="h-8 w-8" />, title: "Backend", desc: "Node, Python" },
              { icon: <Cpu className="h-8 w-8" />, title: "Tools", desc: "Git, VS Code" },
              { icon: <Globe className="h-8 w-8" />, title: "Deploy", desc: "Vercel, Netlify" },
            ].map((skill, index) => (
              <div
                key={index}
                className="group rounded bg-slate-800 p-6 transition-all hover:-translate-y-2 hover:bg-slate-700"
              >
                <div className="mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">{skill.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-200">{skill.title}</h3>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="whitespace-nowrap text-2xl font-bold text-slate-200 md:text-3xl">
              <span className="text-teal-400 mr-2 font-mono">03.</span>Projetos
            </h2>
            <div className="h-px w-full max-w-xs bg-slate-700"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Landing Page Moderna",
                desc: "Uma aplicação web responsiva construída para resolver problemas reais. Inclui autenticação, banco de dados e uma interface moderna.",
                tags: ["React", "Node.js", "Tailwind"],
              },
              {
                title: "Todo App Interativo",
                desc: "Dashboard administrativo com gráficos interativos e gerenciamento de usuários em tempo real.",
                tags: ["Vue.js", "Firebase", "Sass"],
              },
              {
                title: "Weather Dashboard",
                desc: "Landing page de alta conversão com animações suaves e design moderno.",
                tags: ["HTML", "JavaScript", "API"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded bg-slate-800 p-8 transition-all hover:-translate-y-2"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="text-teal-400">
                      <Code2 className="h-10 w-10" />
                    </div>
                    <div className="flex gap-4 text-slate-400">
                      <Link href="#" className="hover:text-teal-400 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="hover:text-teal-400 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-slate-400 leading-relaxed">{project.desc}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center">
          <p className="font-mono text-teal-400">04. O que vem a seguir?</p>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-slate-200 md:text-5xl text-balance">Entre em Contato</h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-slate-400 leading-relaxed">
            Atualmente estou em busca de novas oportunidades. Se você tem uma pergunta ou apenas quer dizer oi, farei o
            meu melhor para responder!
          </p>
          <Link
            href="mailto:email@exemplo.com"
            className="inline-block rounded border border-teal-400 px-8 py-4 text-lg font-medium text-teal-400 transition-all hover:bg-teal-400/10"
          >
            Diga Olá
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <div className="mb-4 flex justify-center gap-6 md:hidden">
          <Link href="#" className="hover:text-teal-400 transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        <p className="font-mono hover:text-teal-400 transition-colors cursor-default">
          Design & Construção por Henrique Martins
        </p>
      </footer>

      {/* Social Sidebars (Desktop) */}
      <div className="fixed bottom-0 left-12 hidden w-10 flex-col items-center gap-6 text-slate-400 md:flex">
        <Link href="#" className="hover:-translate-y-1 hover:text-teal-400 transition-all">
          <Github className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:-translate-y-1 hover:text-teal-400 transition-all">
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:-translate-y-1 hover:text-teal-400 transition-all">
          <Mail className="h-5 w-5" />
        </Link>
        <div className="h-24 w-px bg-slate-700"></div>
      </div>

      <div className="fixed bottom-0 right-12 hidden w-10 flex-col items-center gap-6 text-slate-400 md:flex">
        <a
          href="mailto:email@exemplo.com"
          className="font-mono text-xs tracking-widest hover:-translate-y-1 hover:text-teal-400 transition-all"
          style={{ writingMode: "vertical-rl" }}
        >
          email@exemplo.com
        </a>
        <div className="h-24 w-px bg-slate-700"></div>
      </div>
    </div>
  )
}
