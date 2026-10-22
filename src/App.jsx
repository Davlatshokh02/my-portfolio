
import './index.css'

const projects = [
  {
    number: '01',
    name: 'IT Portal',
    type: 'INTERNAL KNOWLEDGE BASE',
    description:
      'Портал для IT-инструкций, рабочих процессов и организации внутренней базы знаний.',
    tech: ['React', 'Electron', 'Vite'],
    className: 'portal-project',
    label: 'KNOWLEDGE / SYSTEM',
    href: 'https://github.com/Davlatshokh02/it-portal',
  },
  {
    number: '02',
    name: 'Personal Portfolio',
    type: 'PERSONAL WEBSITE',
    description:
      'Персональный сайт для презентации навыков, проектов и сотрудничества с клиентами.',
    tech: ['React', 'Vite', 'CSS'],
    className: 'portfolio-project',
    label: 'DESIGN / DEVELOPMENT',
    href: '#home',
  },
]

const skills = [
  'HTML & CSS',
  'JavaScript',
  'React',
  'SQL',
  'IT Support',
  'Networking',
  'Windows',
  'Git & GitHub',
]

function App() {
  return (
    <div className="site-shell" id="home">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="На главную">
          <span className="brand-symbol">D<span>.</span></span>
          <span className="brand-name">DIGITAL<span> / PORTFOLIO</span></span>
        </a>

        <nav className="nav-links" aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#skills">Навыки</a>
        </nav>

        <a className="nav-contact" href="#contacts">
          Обсудить проект <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              IT SPECIALIST <span className="availability-divider">/</span> WEB DEVELOPER
            </div>

            <h1>
              Превращаю
              <br />
              идеи в <span className="text-blue">цифровые</span>
              <br />
              решения<span className="text-blue">.</span>
            </h1>

            <p className="hero-description">
              Создаю веб-проекты, изучаю технологии и решаю реальные IT-задачи.
              Здесь — мой путь, мои работы и то, что я умею делать.
            </p>

            <div className="hero-buttons">
              <a className="button-primary" href="#projects">
                Смотреть мои работы <span>↗</span>
              </a>
              <a className="button-quiet" href="#contacts">
                Связаться со мной <span>→</span>
              </a>
            </div>

            <div className="hero-bottom-note">
              <span className="note-line" />
              <span>ОТ ИДЕИ ДО РЕЗУЛЬТАТА</span>
            </div>
          </div>

          <div className="portrait-area">
            <div className="portrait-backdrop" />
            <div className="portrait-outline" />

            <div className="portrait-frame">
             <img src={`${import.meta.env.BASE_URL}profile.png`} alt="My photo"
                className="profile-photo"
              />
              <div className="photo-overlay" />
              <div className="portrait-caption">
                <span className="caption-small">THE PERSON BEHIND THE CODE</span>
                <span className="caption-name">IT. WEB. IDEAS.</span>
              </div>
            </div>

            <div className="portrait-index">
              <span className="index-number">01</span>
              <span className="index-label">ABOUT ME</span>
            </div>

            <div className="portrait-chip">
              <span className="chip-indicator" />
              <span>Open to opportunities</span>
            </div>

            <span className="portrait-cross cross-one">+</span>
            <span className="portrait-cross cross-two">+</span>
          </div>
        </section>

        <div className="ticker" aria-label="Мои направления">
          <div className="ticker-track">
            <span>WEB DEVELOPMENT</span><i>✳</i>
            <span>IT INFRASTRUCTURE</span><i>✳</i>
            <span>CREATIVE SOLUTIONS</span><i>✳</i>
            <span>CONTINUOUS GROWTH</span><i>✳</i>
          </div>
        </div>

        <section className="about section-block" id="about">
          <div className="section-kicker">
            <span>01</span> <span>КТО Я</span>
          </div>

          <div className="about-grid">
            <h2>
              Технологии —
              <br />
              это инструмент.
              <br />
              <span className="muted-heading">Результат — цель.</span>
            </h2>

            <div className="about-content">
              <p>
                Я IT-специалист с интересом к веб-разработке и IT-инфраструктуре.
                Мне нравится разбираться в сложных задачах, находить решения и
                превращать идеи в работающие продукты.
              </p>
              <p>
                Постоянно развиваю навыки на практике: создаю собственные проекты,
                изучаю новые инструменты и совершенствую подход к разработке.
              </p>

              <a href="#contacts" className="text-link">
                Давайте знакомиться <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="projects section-block" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span>02</span> <span>МОИ РАБОТЫ</span>
              </div>
              <h2>Создано на практике<span className="text-blue">.</span></h2>
            </div>
            <span className="heading-aside">SELECTED PROJECTS / 2026</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a
                  className={`project-art ${project.className}`}
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={`Открыть проект ${project.name}`}
                >
                  <div className="art-topline">
                    <span>{project.label}</span>
                    <span>{project.number} / 02</span>
                  </div>

                  {project.number === '01' ? (
                    <div className="portal-mockup">
                      <div className="mockup-sidebar">
                        <div className="mockup-logo">IT<span>.</span></div>
                        <div className="mockup-nav active">Overview</div>
                        <div className="mockup-nav">Knowledge</div>
                        <div className="mockup-nav">Processes</div>
                        <div className="mockup-nav">Settings</div>
                      </div>
                      <div className="mockup-main">
                        <div className="mockup-greeting">WORKSPACE / 2026</div>
                        <div className="mockup-title">IT Knowledge Base</div>
                        <div className="mockup-subtitle">Everything in one place.</div>
                        <div className="mockup-panels">
                          <div><span>ARTICLES</span><b>24</b></div>
                          <div><span>PROCESSES</span><b>08</b></div>
                        </div>
                        <div className="mockup-line" />
                        <div className="mockup-line short-line" />
                      </div>
                    </div>
                  ) : (
                    <div className="portfolio-mockup">
                      <div className="portfolio-mockup-top">PERSONAL / PORTFOLIO</div>
                      <div className="portfolio-mockup-title">
                        Digital
                        <br />
                        <span>presence.</span>
                      </div>
                      <div className="portfolio-mockup-bottom">
                        <span>DESIGN WITH PURPOSE</span>
                        <span className="mockup-circle">↗</span>
                      </div>
                    </div>
                  )}

                  <span className="art-open">↗</span>
                </a>

                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>/{project.number}</span>
                </div>

                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span className="project-arrow">↗</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-block" id="skills">
          <div className="section-kicker">
            <span>03</span> <span>ИНСТРУМЕНТЫ</span>
          </div>

          <div className="skills-layout">
            <h2>
              Технологии,
              <br />
              которые я <span className="muted-heading">изучаю</span>
              <span className="text-blue">.</span>
            </h2>

            <div className="skills-content">
              <p>
                Мой набор инструментов растёт вместе с проектами.
                Здесь технологии, с которыми я уже работаю или развиваю практические навыки.
              </p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={skill}>
                    <span className="skill-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{skill}</span>
                    <span className="skill-plus">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacts">
          <div className="contact-glow" />
          <div className="section-kicker">
            <span>04</span> <span>СЛЕДУЮЩИЙ ШАГ</span>
          </div>

          <h2>
            Есть идея?
            <br />
            <span>Давайте создадим её.</span>
          </h2>

          <p>
            Открыт к интересным задачам, сотрудничеству и новым возможностям.
          </p>

          <a className="button-primary contact-button" href="mailto:your-email@example.com">
            Написать мне <span>↗</span>
          </a>

          <span className="contact-decoration">LET'S BUILD SOMETHING GREAT</span>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-symbol">D<span>.</span></span>
          <span className="brand-name">DIGITAL<span> / PORTFOLIO</span></span>
        </a>

        <span className="footer-copy">© 2026 · Создано с вниманием к деталям.</span>

        <a className="back-top" href="#home">НАВЕРХ ↑</a>
      </footer>
    </div>
  )
}

export default App
