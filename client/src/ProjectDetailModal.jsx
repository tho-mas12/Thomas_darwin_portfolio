import './ProjectDetailModal.css'

function ProjectDetailModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null

  const projectDetails = {
    Portfolio: {
      image: '/pro-1.png',
      description: 'Designed a responsive portfolio page using HTML, CSS and React.js with a clean and attractive layout.',
      fullDescription: `This is my personal portfolio website showcasing my skills, projects, and experience as a Fullstack Developer.

The portfolio features:
- Responsive design that works on all devices
- Smooth scrolling navigation
- Project showcase with detailed descriptions
- Work experience timeline
- Skills and certification display
- Contact form with email integration
- Modern UI with clean aesthetics

Technologies Used:
- HTML for semantic structure
- CSS for styling and animations
- JavaScript for interactivity
- React.js for component-based architecture
- Bootstrap for responsive grid system`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Git/GitHub', 'Vercel'],
      duration: '2 weeks',
      role: 'Full Stack Developer',
      challenges: 'Implementing responsive design across multiple screen sizes, smooth scrolling effects',
      lessons: 'Learned modern web design principles and user experience best practices',
      github: 'https://github.com/tho-mas12',
    },
    'Hostel Leave Management': {
      image: '/leave-1.png',
      description: 'Developed a Hostel Leave Management System using Frontend, Python and SQL Database to streamline the leave application process.',
      fullDescription: `A comprehensive system designed to manage hostel leave applications and approvals efficiently.

Features:
- Student leave application form
- Leave status tracking
- Admin dashboard for approval
- Leave history records
- Email notifications
- Responsive design for mobile and desktop

This project helped me understand:
- Form validation and data handling
- User authentication concepts
- Database integration basics
- Admin panel development`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'SQL Database', 'Bootstrap', 'Git/GitHub', 'Render'],
      duration: '3 weeks',
      role: 'Full Stack Developer',
      challenges: 'Implementing approval workflow, ensuring data security',
      lessons: 'Gained knowledge in database management and backend server development',
      github: 'https://github.com/tho-mas12',
    },
    WMPDS: {
      image: '/wmpd-1.png',
      description: 'Connect Wholesalers & Merchants, manage inventory, and distribute products with an intuitive interface.',
      fullDescription: `Wholesale & Merchant Product Distribution System - A B2B platform connecting wholesalers with merchants.

Key Features:
- Product catalog management
- Inventory tracking system
- Order management
- Payment integration
- User authentication
- Dashboard analytics

Platform Benefits:
- Streamlines supply chain
- Real-time inventory updates
- Easy product discovery
- Secure transactions
- Merchant and Wholesaler roles

Technologies & Architecture:
- Frontend: React.js with responsive design
- Backend: Node.js with Express
- Database: MongoDB for product and order data
- Authentication: JWT tokens`,
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Wampserver', 'Bootstrap', 'Git/GitHub'],
      duration: '4 weeks',
      role: 'Full Stack Developer',
      challenges: 'Handling complex inventory management, implementing role-based access',
      lessons: 'Mastered e-commerce platform development and complex data relationships',
      github: 'https://github.com/tho-mas12',
    },
    'Sports Day Registration': {
      image: '/dept.png',
      description: 'A web-based Sports Day Registration System for managing student registrations and sports events.',
      fullDescription: `A modern Sports Day Registration System developed to simplify student participation and event management for school or college sports activities.

Features:
- Student registration form
- Sports event selection
- Participant management
- Responsive dashboard interface
- User-friendly navigation
- Form validation and data handling

The System Includes:
- Student details collection
- Event registration management
- Sports category selection
- Team participation records
- Registration status tracking
- Responsive UI design

Purpose:
This project was created to improve the process of managing sports day activities digitally. It helped in understanding frontend development, responsive design, and user interaction handling using modern web technologies.`,
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Bootstrap'],
      duration: '4 weeks',
      role: 'Full Stack Developer',
      challenges: 'Creating responsive layouts, managing form validations, and designing an interactive user interface.',
      lessons: 'Learned responsive web design, component-based frontend development, team collaboration using GitHub, and UI/UX improvement techniques.',
      github: 'https://github.com/tho-mas12',
    },
    'FrontierWox Tech Intern Management System': {
  image: '/frontier.png',
  description: 'A full-stack internship management system for managing interns, attendance, tasks, and team collaboration. https://frontier-wox-tech-intern.vercel.app/',
  fullDescription: `A modern Internship Management System developed to simplify intern management, attendance tracking, task assignments, and team collaboration within an organization.

Features:
- Secure user authentication
- Attendance management system
- Daily task assignment
- Team and leader management
- Meeting scheduling system
- Responsive dashboard interface

The System Includes:
- Intern registration and login
- Team management
- Attendance and break tracking
- Daily work assignment
- Meeting attendance management
- Role-based dashboard access

Purpose:
This project was created to improve internship workflow management digitally. It helped in understanding full-stack development, API integration, database management, authentication systems, and responsive UI design using modern web technologies.`,
  technologies: ['React.js', 'FastAPI', 'Python', 'MongoDB', 'JavaScript', 'CSS3'],
  duration: '6 weeks',
  role: 'Full Stack Developer',
  challenges: 'Implementing authentication, handling API integration, managing MongoDB data, and solving deployment and CORS issues.',
  lessons: 'Learned full-stack web development, backend API creation, database integration, authentication handling, deployment using Vercel and Render, and debugging real-world application issues.',
  github: 'https://github.com/tho-mas12',
},
  }

  const details = projectDetails[project.title] || projectDetails.Portfolio

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
              <p>{details.fullDescription}</p>
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
              <a href={details.github} target="_blank" rel="noreferrer" className="button primary-button">
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

