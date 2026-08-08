import { useState, useEffect } from 'react'
import './App.css'
import CVModal from './CVModal'
import ProjectDetailModal from './ProjectDetailModal'

const projects = [
  {
    title: 'JIM Hostel management System',
    image: '/JIM_project.png',
    description: 'Designed and developed a web-based system to streamline hostel attendance and room occupied details. Features include student attendance report, director management workflow, and basic data administration.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'SQL Database', 'Bootstrap', 'Git/GitHub', 'Render'],
    liveUrl: 'https://jim-hostel.vercel.app/login'
  },
  {
    title: 'Friday AI – AI Chatbot Application',
    image: '/Friday_ai.png',
    description: 'Developed an AI-powered chatbot that enables real-time, human-like conversations through an interactive and responsive user interface. Integrated AI-based response generation, backend services, and database management.',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Wampserver', 'Bootstrap', 'Git/GitHub'],
    liveUrl: 'https://nexa-ai-six.vercel.app/login.html'
  },
  {
    title: 'FrontierWox Tech Intern Management System',
    image: '/frontier.png',
    description: 'A full-stack internship management system developed for managing interns, attendance, tasks, meetings, and team collaboration with role-based access.',
    technologies: ['React.js', 'FastAPI', 'Python', 'MongoDB', 'JavaScript', 'CSS3', 'Vercel', 'Render'],
    liveUrl: 'https://frontier-wox-tech-intern.vercel.app/'
  },
  {
    title: 'Sports Day Registration',
    image: '/SJC_sports.png',
    description: 'A web-based Sports Day Registration System for managing student registrations and sports events with role-based dashboard.',
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Bootstrap'],
    liveUrl: 'https://sjcsports.frontierwox.in'
  }
]

const services = [
  {
    num: '01',
    title: 'Website Development',
    description: 'Developing responsive, pixel-perfect, and high-performance frontends using React.js, modern JavaScript, and optimized styles.'
  },
  {
    num: '02',
    title: 'Full Stack Solutions',
    description: 'Integrating frontend client structures with robust backends (Python, FastAPI, Wampserver) and modern databases.'
  },
  {
    num: '03',
    title: 'Database & API Integration',
    description: 'Designing modules for securely storing data, user authentication, and integrating structured APIs with MongoDB and SQL databases.'
  },
  {
    num: '04',
    title: 'Frontend UI Implementation',
    description: 'Translating complex wireframes and high-fidelity Figma designs into calm, elegant, and effortless web experiences.'
  }
]

const experiences = [
  {
    title: 'Part Developer – IQAC',
    company: "St. Joseph's College (Autonomous), Tiruchirappalli",
    duration: 'Present',
    details: [
      'Contributed to the development of the official IQAC Management Website.',
      'Designed modules for securely storing department-wise IQAC data.',
      'Worked on Full Stack development, database integration, authentication, and deployment.',
      'Assisted in creating a digital platform to simplify institutional data management and documentation.'
    ]
  },
  {
    title: 'Full Stack Web Developer (Intern)',
    company: 'FrontierWox Tech',
    duration: 'May 2026',
    details: [
      'Developed a Sports Day Registration System for student event management.',
      'Designed responsive UI using React.js, MongoDB, and Figma.',
      'Collaborated with team members using GitHub for development phase.'
    ]
  }
]

const certificates = [
  { title: 'Programming Java', issuer: 'NPTEL, Issued by: IIT Kharagpur', image: '/java.png' },
  { title: 'Artificial Intelligence Essential V2', issuer: 'Certified IBM, Issued by: Coursera', image: '/IBM-AI.png' },
  { title: 'Swayam NPTEL Certificate', issuer: 'Swayam Online Courses', image: '/swayam.png' },
  { title: 'Typing Certificate', issuer: 'English Junior Grade', image: '/typing.png' },
  { title: 'Workshop With AI', issuer: 'AI Technology Training', image: '/workshop.png' }
]

const skillGroups = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript']
  },
  {
    category: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Responsive UI Design']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'RDBMS', 'MongoDB']
  },
  {
    category: 'Tools & Workflows',
    items: ['Git / GitHub', 'Figma', 'Vercel', 'Render', 'Wampserver', 'FastAPI']
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Effective Communication', 'Active Listening', 'Critical Thinking', 'Team Collaboration', 'Negotiating', 'Project Management']
  }
]

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [projectDetailModal, setProjectDetailModal] = useState({
    isOpen: false,
    project: null,
  })
  const [scrollProgress, setScrollProgress] = useState(0)

  // Hero section mouse coordinates for subtle parallax
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  // Scroll progress indicator calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Instantly animate hero elements after mount for immediate entrance effect
    const heroEl = document.querySelector('.hero-copy')
    const heroImg = document.querySelector('.hero-image')
    if (heroEl) heroEl.classList.add('visible')
    if (heroImg) heroImg.classList.add('visible')

    const observerOptions = {
      root: null,
      rootMargin: '0px -50px -50px 0px',
      threshold: 0.05,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with .reveal except the hero elements that animated on mount
    const elements = document.querySelectorAll('.reveal:not(.hero-copy):not(.hero-image)')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Mouse move handler for Hero parallax
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    // Scale down movement for subtle effect (max 10px translate)
    setParallaxOffset({ x: x * 10, y: y * 10 })
  }

  const handleHeroMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 })
  }

  // Card 3D tilt mouse handlers
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Calculate rotation angle (max 5 degrees)
    const rotateX = -(y / (rect.height / 2)) * 5
    const rotateY = (x / (rect.width / 2)) * 5
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
  }

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name || !email || !message) {
      setStatus('Please enter your name, email, and message before sending.')
      return
    }

    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio Contact'}\n\n${message}`
    const mailtoLink = `mailto:thomasdarwin1208@gmail.com?subject=${encodeURIComponent(
      subject || 'Portfolio Contact',
    )}&body=${encodeURIComponent(body)}`

    setStatus('Opening your email client to send the message...')
    window.location.href = mailtoLink
  }

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-accent">Thomas</span> Darwin.
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work-experience">Experience</a>
          <a href="#projects">Selected Works</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button onClick={() => setCvModalOpen(true)} className="button nav-cta">
          View My CV
        </button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="hero-section"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="hero-copy reveal reveal-fade-in">
            <div className="available-badge">
              <span className="pulse-dot"></span>
              Available for new opportunities
            </div>
            <h1 className="hero-headline">
              <div className="reveal-line-wrapper">
                <span className="reveal-line line-1 serif-italic">Hey, there.</span>
              </div>
              <div className="reveal-line-wrapper">
                <span className="reveal-line line-2">I AM THOMAS DARWIN</span>
              </div>
            </h1>
            <p className="hero-title">Full Stack Developer & Web Developer</p>
            <p className="hero-text">
              I am a motivated Computer Science student specializing in building clean, responsive, and database-driven web applications. I design digital products with simple structures, intentional details, and calm, effortless user experiences.
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="button primary-button">
                Let's Work Together
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-darwin-12aug2006"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a href="https://github.com/tho-mas12" target="_blank" rel="noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </div>

          <div
            className="hero-image reveal reveal-scale-up"
            style={{ transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)` }}
          >
            <div className="image-overlay"></div>
            <img src="/prof-ai.png" alt="Thomas Darwin J" />
          </div>
        </section>

        {/* ABOUT & PHILOSOPHY */}
        <section id="about" className="about-section reveal reveal-fade-in">
          <div className="about-image-block">
            <img src="/prof-ai.png" alt="Thomas Darwin J" className="about-image" />
          </div>

          <div className="about-copy">
            <p className="section-label">01 / About & Philosophy</p>
            <h2>Purposeful execution, thoughtful systems.</h2>
            <p>
              I'm a Full Stack Developer and Web Developer who builds modern, reliable, and purposeful digital experiences. I turn ideas and complex requirements into clean, scalable web applications with thoughtful architecture, intuitive interfaces, and efficient backend systems.
            </p>
            <p>
              I enjoy solving real-world problems through technology, working across frontend, backend, databases, and APIs to create complete digital solutions. My approach is simple: understand the problem, build with intention, and refine every detail until the result feels effortless.
            </p>
            <p>
              I'm constantly learning, experimenting with new technologies, and building projects that challenge me to grow as a developer.
            </p>
            <a href="#services" className="button secondary-button">
              Explore Services
            </a>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="services-section">
          <div className="section-header reveal reveal-fade-in">
            <p className="section-label">02 / Capabilities</p>
            <h2>I can help you with</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.num} className="service-card reveal reveal-slide-up">
                <span className="service-number">{service.num}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work-experience" className="experience-section">
          <div className="section-header reveal reveal-fade-in">
            <p className="section-label">03 / Background</p>
            <h2>Professional experience</h2>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.company} className="timeline-item reveal reveal-fade-in">
                <div className="timeline-meta">
                  <span className="timeline-duration">{exp.duration}</span>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <ul className="timeline-details-list">
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section">
          <div className="section-header reveal reveal-fade-in">
            <p className="section-label">04 / Case Studies</p>
            <h2>Selected projects</h2>
            <p className="section-note">
              A curated selection of responsive full-stack websites and chatbot tools, showcasing design systems, API architectures, and real-world database integrations.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card reveal reveal-slide-up"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="card-image-wrapper">
                  <img className="project-thumb" src={project.image} alt={project.title} />
                  <div className="card-image-gradient"></div>
                </div>
                <div className="project-card-content">
                  <div className="tech-tags">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="button card-btn-primary"
                      onClick={() =>
                        setProjectDetailModal({
                          isOpen: true,
                          project: project,
                        })
                      }
                    >
                      View Project <span>→</span>
                    </button>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button card-btn-secondary">
                        Visit Site ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS & EDUCATION SECTION */}
        <section id="skills" className="skills-edu-section">
          <div className="skills-col reveal reveal-fade-in">
            <div className="section-header">
              <p className="section-label">05 / Expertise</p>
              <h2>Technical skills</h2>
            </div>
            <div className="skills-accordion">
              {skillGroups.map((group) => (
                <div key={group.category} className="skill-group reveal reveal-slide-up">
                  <h4>{group.category}</h4>
                  <div className="skill-badges">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-cert-col reveal reveal-fade-in">
            <div className="section-header">
              <p className="section-label">06 / Credentials</p>
              <h2>Education & certificates</h2>
            </div>
            
            <div className="education-block">
              <span className="edu-year">2024/06 – 2027/04</span>
              <h4>Bachelor of Science in Computer Science</h4>
              <p className="edu-college">St. Joseph's College (Autonomous), Tiruchirappalli</p>
              <p className="edu-status">Currently Pursuing</p>
            </div>

            <div className="certs-list">
              <h4>Selected Certifications</h4>
              <div className="certs-grid">
                {certificates.map((cert) => (
                  <div key={cert.title} className="cert-item">
                    <div className="cert-thumbnail">
                      <img src={cert.image} alt={cert.title} />
                    </div>
                    <div className="cert-info">
                      <h5>{cert.title}</h5>
                      <p>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="contact-grid">
            <div className="contact-info-col reveal reveal-fade-in">
              <p className="section-label">07 / Collaboration</p>
              <h2 className="contact-headline serif-italic">Let's create something calm.</h2>
              <p className="contact-intro">
                Have an internship opportunity, a project proposal, or just want to chat about full stack development? Get in touch.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="detail-label">Write me:</span>
                  <a href="mailto:thomasdarwin1208@gmail.com" className="detail-value">thomasdarwin1208@gmail.com</a>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Call me:</span>
                  <a href="tel:6381310736" className="detail-value">+91 6381310736</a>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Based in:</span>
                  <span className="detail-value">Dindigul, Tamil Nadu, India</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Languages:</span>
                  <span className="detail-value">English & Tamil</span>
                </div>
              </div>
            </div>

            <div className="contact-form-col reveal reveal-slide-up">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                
                <div className="form-group">
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    id="email"
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-group">
                  <input
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    type="text"
                    id="subject"
                    placeholder=" "
                  />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-group">
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    id="message"
                    required
                    rows="4"
                    placeholder=" "
                  />
                  <label htmlFor="message">Your Message</label>
                </div>

                {status && <p className="form-status">{status}</p>}
                
                <button type="submit" className="button form-submit-btn">
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Thomas Darwin J. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/tho-mas12" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/thomas-darwin-12aug2006" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:thomasdarwin1208@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <ProjectDetailModal
        isOpen={projectDetailModal.isOpen}
        onClose={() => setProjectDetailModal({ isOpen: false, project: null })}
        project={projectDetailModal.project}
      />
    </div>
  )
}

export default App
