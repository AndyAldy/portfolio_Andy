import { useState, useEffect } from 'react';
import { personalInfo, projectsData } from './data/portofolioData'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  // Menghitung filter secara langsung saat proses render, tanpa memicu re-render ganda lewat useEffect.
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Efek Navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
      const target = document.getElementById('projects');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">{personalInfo.name}</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Portofolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <div className="profile-frame">
            <img 
              src="/assets/img/profile.jpg" 
              alt={personalInfo.name} 
              className="profile-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500";
              }}
            />
          </div>
          <h1 className="glitch-text">{personalInfo.name}</h1>
          <h2>{personalInfo.title} | {personalInfo.institution}</h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="badge-container">
            <span className="internship-badge"><i className="far fa-calendar-alt"></i> Available for Internship: Juli 2026</span>
          </div>
          <button onClick={handleExploreClick} className="btn-primary">
            {btnLoading ? (
              <span>Memuat... <i className="fas fa-spinner fa-spin"></i></span>
            ) : (
              <span>Eksplorasi Proyek <i className="fas fa-arrow-right"></i></span>
            )}
          </button>
        </div>
      </header>

      {/* About & Skills Section */}
      <section id="about" className="section container">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-grid">
          <div className="about-card">
            <p>{personalInfo.about}</p>
          </div>
          
          <div className="skills-display">
            <h3>Core Technical Expertise</h3>
            <div className="skills-group">
              <h4>Languages</h4>
              <div className="tags">
                {personalInfo.skills.languages.map(skill => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </div>
            <div className="skills-group">
              <h4>Frameworks & Web</h4>
              <div className="tags">
                {personalInfo.skills.frameworks.map(skill => <span key={skill} className="tag tech-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skills-group">
              <h4>Internet of Things (IoT)</h4>
              <div className="tags">
                {personalInfo.skills.iot.map(skill => <span key={skill} className="tag iot-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skills-group">
              <h4>Tools & DB</h4>
              <div className="tags">
                {personalInfo.skills.tools.map(skill => <span key={skill} className="tag tool-tag">{skill}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Live Filtering */}
      <section id="projects" className="section container">
        <h2 className="section-title">Portofolio Proyek</h2>
        
        {/* Interactive Filter Tabs */}
        <div className="filter-tabs">
          {['All', 'Tech Engineering', 'Data Analytics', 'Social Tech'].map(category => (
            <button
              key={category}
              className={`tab-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <span className="card-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tech-stack">
                {project.tech.map(techItem => (
                  <span key={techItem} className="tech-mini-tag">#{techItem}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container text-center">
        <h2 className="section-title">Hubungi Saya</h2>
        <p style={{color: '#94a3b8', marginBottom: '30px'}}>Mari terhubung untuk kolaborasi teknologi dan analisis data.</p>
        <div className="social-links-container">
          <a href={`mailto:${personalInfo.contacts.email}`} className="social-icon" title="Email"><i className="fas fa-envelope"></i></a>
          <a href={`tel:${personalInfo.contacts.phone}`} className="social-icon" title="Telepon"><i className="fas fa-phone"></i></a>
          <a href={personalInfo.contacts.linkedin} target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href={personalInfo.contacts.github} target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><i className="fab fa-github"></i></a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 {personalInfo.name}. Built with React.js & Modern CSS.</p>
      </footer>
    </div>
  );
}

export default App;