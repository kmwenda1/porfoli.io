import React, { useState, useMemo } from 'react'
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  Menu,
  X,
  Send
} from 'lucide-react'
import { ProjectCategory, projectsData } from './data/projectsData'

const filterCategories: ProjectCategory[] = ['All', 'Backend', 'AI/ML', 'APIs']

export function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formSent, setFormSent] = useState(false)

  const email = 'barackakoome@gmail.com'
  const phone = '+254 720 549 139'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailto
    setFormSent(true)
  }

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData
    return projectsData.filter((p) => p.categories.includes(activeCategory as any))
  }, [activeCategory])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-wrapper">
      {/* Top Navigation */}
      <header className="site-header">
        <a className="site-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          barakakoome.dev
        </a>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`site-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work'); }}>Work</a>
          <a href="#tools" onClick={(e) => { e.preventDefault(); scrollTo('tools'); }}>Tools</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <p className="hero-role">Backend Developer · AI/ML Engineer</p>
          <h1 className="hero-title">
            I build reliable backend and AI systems for practical problem-solving.
          </h1>
          <p className="hero-summary">
            Backend platforms for financial ledgers, payments, and concurrent transactions — plus applied AI systems for semantic rate-limiting, policy retrieval, and computer vision. Java, Python, Spring Boot, FastAPI, and cloud infrastructure.
          </p>

          <div className="hero-cta-row">
            <a href="#work" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('work'); }}>
              View work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              Get in touch
            </a>
            <a href={`mailto:${email}`} className="btn btn-ghost">
              Email me
            </a>
          </div>

          <div className="hero-meta-block">
            <div className="meta-ticker">
              <span>Nairobi</span>
              <span className="ticker-dot">·</span>
              <span>backend systems</span>
              <span className="ticker-dot">·</span>
              <span>fintech</span>
              <span className="ticker-dot">·</span>
              <span>applied AI</span>
            </div>
            <p className="hero-extended-bio">
              I'm a backend developer and AWS AI/ML scholar based in Nairobi working across transactional backend architectures, distributed caching, fintech, and applied AI. My strongest hands-on experience is in Java, Spring Boot, Python, and FastAPI, with practical work in PostgreSQL, Redis, PyTorch, RAG, and M-Pesa Daraja.
            </p>
            <a href="#about" className="text-link" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
              More about me <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Selected work</h2>
            <p className="section-description">
              From backend infrastructure and financial ledgers to AI-powered applications, here are key systems and case studies I've built.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-pill-row" role="tablist" aria-label="Filter work by domain">
            {filterCategories.map((cat) => {
              const count =
                cat === 'All'
                  ? projectsData.length
                  : projectsData.filter((p) => p.categories.includes(cat as any)).length
              const isActive = activeCategory === cat

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat} <span className="pill-count">({count})</span>
                </button>
              )
            })}
          </div>

          {/* Clean Projects List */}
          <div className="project-list">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-entry">
                <div className="project-entry-top">
                  <h3 className="project-heading">
                    {project.title} <span className="title-sep">—</span> <span className="project-sub">{project.subtitle}</span>
                  </h3>
                  <span className="project-context">{project.context}</span>
                </div>

                <p className="project-body-text">{project.description}</p>

                <div className="project-tech-tags" aria-label="Technologies used">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-link"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <span>View repository</span>
                    <ArrowUpRight size={14} />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-link live"
                      aria-label={`Open live deployment of ${project.title}`}
                    >
                      <span>Live demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tools I Reach For (Skills) */}
        <section id="tools" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Tools I reach for</h2>
          </div>

          <div className="tools-catalog">
            <div className="tool-category">
              <span className="category-label">Languages</span>
              <p className="category-items">Java · Python · TypeScript · JavaScript · SQL · Bash</p>
            </div>

            <div className="tool-category">
              <span className="category-label">Backend</span>
              <p className="category-items">
                Spring Boot 3 · FastAPI · Spring Security · Spring AOP · Spring Cloud Gateway · REST APIs · WebSockets · Concurrency &amp; Locks
              </p>
            </div>

            <div className="tool-category">
              <span className="category-label">Data &amp; messaging</span>
              <p className="category-items">
                PostgreSQL · Redis · MySQL · Append-Only Event Store · Bucket4j · Connection Pooling
              </p>
            </div>

            <div className="tool-category">
              <span className="category-label">AI / ML</span>
              <p className="category-items">
                Amazon SageMaker · PyTorch · ChromaDB · fastembed · Groq / Llama 3.1 · RAG · OpenAI Function Calling · Streamlit
              </p>
            </div>

            <div className="tool-category">
              <span className="category-label">Cloud &amp; ops</span>
              <p className="category-items">
                AWS · Docker · Git &amp; GitHub · Maven · Prometheus · Micrometer · M-Pesa Daraja API · Linux
              </p>
            </div>

            <div className="tool-category">
              <span className="category-label">Scholarships &amp; training</span>
              <p className="category-items">
                AWS AI/ML Scholars Program (Completed, 2026) · AWS AI/ML Nanodegree Scholarship — Future AI Programmer (In Progress)
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="content-section">
          <div className="section-header">
            <h2 className="section-title">About me</h2>
          </div>

          <div className="about-text-content">
            <p>
              I'm a backend developer and AWS AI/ML scholar based in Nairobi, Kenya. I hold a <strong>Diploma in Computer Science (2024–2026)</strong> from <strong>Zetech University</strong>, where my coursework focused on Data Structures &amp; Algorithms, Database Systems, Software Engineering, and Computer Networks. My final year project was <em>Twende Systems</em>, an atomic reservation engine with concurrent conflict detection and M-Pesa payments.
            </p>
            <p>
              I was selected for the competitive <strong>AWS AI/ML Scholars Program</strong> and earned a continuation into the follow-on <strong>AWS AI/ML Nanodegree Scholarship</strong> for Future AI Programmers. Through this, I've developed practical expertise in Amazon SageMaker, neural networks, vector databases (ChromaDB), RAG architectures, and MLOps evaluation workflows.
            </p>
            <p>
              I love building software that solves concrete operational problems — from financial auditability in informal investment groups (<em>ChamaLedger</em>) to cost-aware AI infrastructure (<em>SemanticGate</em>) and resilient asynchronous APIs (<em>Weather API</em>).
            </p>

            <div className="reading-list-block">
              <span className="reading-label">Books on my desk:</span>
              <ul className="reading-list">
                <li><strong>Currently reading:</strong> <em>Atomic Habits</em> — James Clear</li>
                <li><strong>Foundational:</strong> <em>Designing Data-Intensive Applications</em> — Martin Kleppmann</li>
                <li><strong>Craft:</strong> <em>Clean Code</em> — Robert C. Martin · <em>The Pragmatic Programmer</em> — D. Thomas &amp; A. Hunt</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Let's Talk / Contact Section */}
        <section id="contact" className="content-section contact-section">
          <div className="section-header">
            <h2 className="section-title">Let's talk</h2>
            <p className="section-description">
              I'm open to backend developer, platform, fintech, and applied AI engineering internship and junior roles, as well as collaborative projects. Email is fastest, or use the form below.
            </p>
          </div>

          <div className="contact-links-row">
            <a href={`mailto:${email}`} className="contact-link-pill">
              <Mail size={14} />
              <span>{email}</span>
            </a>
            <button type="button" className="copy-link-btn" onClick={copyEmail} title="Copy email address">
              {copiedEmail ? <Check size={13} className="text-green" /> : <Copy size={13} />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
            <a href="https://www.linkedin.com/in/baracka-koome-52b834412/" target="_blank" rel="noreferrer" className="contact-link-pill">
              LinkedIn ↗
            </a>
            <a href="https://github.com/kmwenda1" target="_blank" rel="noreferrer" className="contact-link-pill">
              GitHub ↗
            </a>
            <span className="location-pill">Nairobi, Kenya ({phone})</span>
          </div>

          {/* Simple Contact Form */}
          <form className="simple-contact-form" onSubmit={handleFormSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">What would you like to talk about?</label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Hi Baraka, we have an opening for a backend / AI engineer..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <span>Send message</span>
              <Send size={14} />
            </button>

            {formSent && (
              <p className="form-feedback-text">
                Your email client was opened. If it didn't trigger, please email me directly at{' '}
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2026 Baraka Koome · Nairobi, Kenya</p>
      </footer>
    </div>
  )
}

export default App
