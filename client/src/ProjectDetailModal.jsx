import './ProjectDetailModal.css'

function ProjectDetailModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null

  const projectDetails = {
    'JIM Hostel management System': {
      image: '/JIM_project.png',
      description: 'Designed and developed a web-based system to streamline hostel attendance and room occupied details. Features include student attendance report, director management workflow, and basic data administration.',
      fullDescription: `A comprehensive web application designed to digitize and automate hostel operations, attendance, and leave management processes.
      
Features:
- Student login & leave request submission
- Interactive occupancy records & hostel room tracking
- Director/Warden workflow for approvals & attendance analysis
- Basic data administration panel
- Deployed on Render with a robust backend and relational database`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'SQL Database', 'Bootstrap', 'Git/GitHub', 'Render'],
      duration: '3 weeks',
      role: 'Full Stack Developer',
      challenges: 'Formulating a robust approval workflow and establishing a secure database connection for storing dynamic student records.',
      lessons: 'Gained hands-on experience in managing relational databases, backend routing, and designing secure admin roles.',
      github: 'https://github.com/tho-mas12',
    },
    'Friday AI – AI Chatbot Application': {
      image: '/Friday_ai.png',
      description: 'Developed an AI-powered chatbot that enables real-time, human-like conversations through an interactive and responsive user interface.',
      fullDescription: `An AI-driven assistant that processes and generates natural language responses in real-time, built with a clean and minimal frontend user interface.

Features:
- Real-time conversation stream
- Clean chat window with interactive, modern input states
- Dynamic context-aware responses
- Backend integration with Python and database management
- Deployed on Vercel/Render for instant access`,
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Wampserver', 'Bootstrap', 'Git/GitHub'],
      duration: '4 weeks',
      role: 'Frontend & API Integrator',
      challenges: 'Handling real-time API latency and managing conversation history context effectively.',
      lessons: 'Learned the fundamentals of API response integration, state management for conversation threads, and lightweight local server hosting.',
      github: 'https://github.com/tho-mas12',
    },
    'FrontierWox Tech Intern Management System': {
      image: '/frontier.png',
      description: 'A full-stack internship management system for managing interns, attendance, tasks, and team collaboration.',
      fullDescription: `A complete enterprise portal for managing interns, tracking attendance, scheduling meetings, and reviewing daily tasks.

Features:
- Secure JWT-based authentication
- Daily task assignment and leaderboards
- Real-time attendance check-in/check-out with break trackers
- Meeting scheduling and role-based access control
- Modern dashboards for administrators and interns`,
      technologies: ['React.js', 'FastAPI', 'Python', 'MongoDB', 'JavaScript', 'CSS3', 'Vercel', 'Render'],
      duration: '6 weeks',
      role: 'Full Stack Developer',
      challenges: 'Configuring multi-role dashboard routing, securing JWT storage, and debugging cross-origin (CORS) resource sharing between Vercel and Render.',
      lessons: 'Deepened full-stack engineering skills, FastAPI route design, MongoDB queries, and setting up staging and production environments.',
      github: 'https://github.com/tho-mas12',
    },
    'Sports Day Registration': {
      image: '/SJC_sports.png',
      description: 'A web-based Sports Day Registration System for managing student registrations and sports events.',
      fullDescription: `A dynamic platform developed to streamline and manage event registrations for school and college sports activities.

Features:
- Custom student registration forms
- Event categorization and limit controls
- Dynamic tracking dashboards
- High performance MongoDB storage`,
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Bootstrap'],
      duration: '4 weeks',
      role: 'Full Stack Developer (Intern)',
      challenges: 'Validating registration boundaries and designing an intuitive, multi-step signup experience.',
      lessons: 'Strengthened component architecture in React, state hooks, and database CRUD operations.',
      github: 'https://github.com/tho-mas12',
    }
  }

  const details = projectDetails[project.title] || projectDetails['JIM Hostel management System']

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="project-detail-container">
          <div className="project-detail-image">
            <img src={details.image} alt={project.title} />
          </div>

          <div className="project-detail-content">
            <h1>{project.title}</h1>
            <p className="project-brief">{details.description}</p>

            <div className="detail-grid">
              <div className="detail-item">
                <h3>Duration</h3>
                <p>{details.duration}</p>
              </div>
              <div className="detail-item">
                <h3>Role</h3>
                <p>{details.role}</p>
              </div>
            </div>

            <section className="detail-section">
              <h2>About This Project</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>{details.fullDescription}</p>
            </section>

            <section className="detail-section">
              <h2>Technologies Used</h2>
              <div className="tech-list">
                {details.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Challenges Faced</h2>
              <p>{details.challenges}</p>
            </section>

            <section className="detail-section">
              <h2>Key Learnings</h2>
              <p>{details.lessons}</p>
            </section>

            <div className="project-actions">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button primary-button">
                  Visit Live Site ↗
                </a>
              )}
              <a href={details.github} target="_blank" rel="noreferrer" className="button secondary-button">
                View on GitHub
              </a>
              <button onClick={onClose} className="button secondary-button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
