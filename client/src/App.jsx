import { useState } from 'react'
import './App.css'
import CVModal from './CVModal'
import ProjectDetailModal from './ProjectDetailModal'

const projects = [
  {
    title: 'Portfolio',
    image: '/pro-1.png',
    description:
      'Designed a responsive portfolio page using HTML, CSS and React.js with a clean and attractive layout.',
  },
  {
    title: 'Hostel Leave Management',
    image: '/leave-1.png',
    description:
      'Developed a Hostel Leave Management System using HTML, CSS, python, Wampserver to streamline the leave application process and deployed in render.',
  },
  {
    title: 'WMPDS',
    image: '/wmpd-1.png',
    description:
      'Connect Wholesalers & Merchants, manage inventory, and distribute products with an intuitive interface.',
  },
  {
    title: 'Sports Day Registration',
    image: '/dept.png',
    description:
      'A web-based Sports Day Registration System for managing student registrations and sports events..',
  },
   {
    title: 'FrontierWox Tech Intern',
    image: '/frontier.png',
    description:
      'FrontierWoxSync is a full-stack internship management system developed using React.js, FastAPI, and MongoDB for managing interns, attendance, tasks, meetings, and team collaboration with role-based access.'  },
]

const gallery = [
  { label: 'Project Image', image: '/wmpd-1.png' },
  { label: 'Project Image', image: '/leave-1.png' },
  { label: 'Project Image', image: '/pro-1.png' },
  { label: 'Project Image', image: '/biodata.png' },
  { label: 'Project Image', image: '/wmpd-1.png' },
  { label: 'Project Image', image: '/leave-1.png' },
]

const experiences = [
  {
    title: 'Internship Experience',
    company: 'FrontierWox Tech',
    duration: 'May/2026',
    details:
      'I had the great experience in my intership, and also learnt more how to structure the project.',
  }
]

const certificates = [
  { title: 'IBM AI certificate', image: '/IBM-AI.png' },
  { title: 'Java Programming', image: '/java.png' },
  { title: 'Swayam NTPEL', image: '/swayam.png' },
  { title: 'Typing Certificate', image: '/typing.png' },
  { title: 'Workshop With AI', image: '/workshop.png' },
]

const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Responsive Design',
  'Git / GitHub',
  'Problem Solving',
  'Communication',
  'JavaScript',
  'React.js',
  'python',
  'Team Collaboration',
  'Figma',
  'MongoDB',
  

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
      <header className="navbar">
        <a href="#home" className="brand">
          <spam><h2>Portfolio</h2></spam>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#work-experience">Work Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button onClick={() => setCvModalOpen(true)} className="button nav-cta">
          View My CV
        </button>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Hi, I am</span>
            <h1>THOMAS DARWIN J</h1>
            <p className="hero-title">And I'm a Fullstack Developer</p>
            <p className="hero-text">
              I'm Thomas, a Fullstack Developer with a Computer Science background. I create responsive,
              clean web interfaces with a focus on usability.
            </p>
            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/thomas-darwin-3646a5314"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span className="social-icon">in</span> LinkedIn
              </a>
              <a href="https://github.com/tho-mas12" target="_blank" rel="noreferrer" className="social-link">
                <span className="social-icon">GH</span> GitHub
              </a>
              <a href="mailto:thomasdarwin1208@gmail.com" className="social-link">
                <span className="social-icon">✉</span> Email
              </a>
            </div>
            <a href="#contact" className="button primary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-image">
            <img src="/prof-ai.png" alt="Thomas Darwin" />
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-image-block">
            <img src="/profile.jpeg" alt="Thomas Darwin" className="about-image" />
          </div>

          <div className="about-copy">
            <p className="section-label">About Me</p>
            <h2>Frontend Developer</h2>
            <p>
              I am Thomas Darwin J, an aspiring Fullstack developer with a background in Computer Science.
              I have hands-on experience with HTML, CSS, JavaScript, Bootstrap and React.js.
              I currently studying at st. Joseph's College Trichy, B Sc Computer Science. I am passionate about creating responsive and user-friendly web interfaces, and I am eager to continue learning and growing in the field of web development.
            </p>
            <a href="#skills" className="button secondary-button">
              View Skills
            </a>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2>My Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="card-image">
                  <img className="project-thumb" src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button
                  type="button"
                  className="button tertiary-button"
                  onClick={() =>
                    setProjectDetailModal({
                      isOpen: true,
                      project: project,
                    })
                  }
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="work-experience" className="experience-section">
          <div className="section-header">
            <h2>Internship Experience</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article key={experience.title} className="experience-card">
                <h3>{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>
                <p className="experience-duration">{experience.duration}</p>
                <p>{experience.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="certificate-section">
          <div className="section-header">
            <h2>Certificates</h2>
            <p className="section-note">I have completed 5 certificates in web development and frontend skills. I will update these with exact titles and issuing organizations.</p>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="certificate-card">
                <img src={certificate.image} alt={certificate.title} className="certificate-image" />
                <p className="certificate-title">{certificate.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-header">
            <h2>Skills</h2>
            <p className="section-note">These are the technical skills I am working with and will continue to improve as I add more projects.</p>
          </div>
          <div className="skill-badges">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-header">
            <h2>Contact Me</h2>
            <p className="section-note">Send a short message and it will open in your email client to mail directly to thomasdarwin1208@gmail.com.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Full Name" />
            </label>
            <label>
              Email Address
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email Address" />
            </label>
            <label>
              Subject
              <input value={subject} onChange={(event) => setSubject(event.target.value)} type="text" placeholder="Email Subject" />
            </label>
            <label>
              Your Message
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Your Message" rows="5" />
            </label>
            {status && <p className="form-status">{status}</p>}
            <button type="submit" className="button primary-button">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/tho-mas12" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/thomas-darwin-3646a5314" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:thomasdarwin1208@gmail.com">Email</a>
        </div>
        <p>© 2025 Thomas Darwin J. All rights reserved.</p>
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
