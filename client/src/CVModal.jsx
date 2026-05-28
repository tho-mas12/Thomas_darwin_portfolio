import './CVModal.css'

function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="cv-container">
          <embed src="/CV.pdf" type="application/pdf" className="cv-pdf-embed" />
        </div>

        <div className="cv-actions">
          <a href="/CV.pdf" download className="button primary-button">
            Download CV PDF
          </a>
          <button onClick={onClose} className="button secondary-button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CVModal
