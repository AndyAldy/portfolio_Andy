import { useState } from 'react';
import fotoProfil from './assets/profile.jpg';
import { personalInfo, projectsData } from './data/portofolioData'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // State untuk melacak halaman aktif (page-by-page system)
  const [activePage, setActivePage] = useState('home');
  const [activeFilter, setActiveFilter] = useState('All');

  // Kalkulasi langsung data proyek yang terfilter
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="app-container">
      
      {/* 1. Header Profile: Menetap di bagian paling atas halaman */}
      <header className="profile-header">
        <div className="profile-frame">
        <img src={fotoProfil} alt="Andy Aldyansyah" className="profile-img" />
        </div>
        <h1 className="glitch-text">{personalInfo.name}</h1>
        <h2>{personalInfo.title} | {personalInfo.institution}</h2>
        <div className="badge-container">
          <span className="internship-badge">
            <i className="far fa-calendar-alt"></i> Available for Internship: Juli 2026
          </span>
        </div>
      </header>

      {/* 2. Navigasi Utama: Sekarang dipindahkan tepat di bawah Profile */}
      <nav className="profile-nav">
        <button 
          className={`nav-tab-btn ${activePage === 'home' ? 'active' : ''}`} 
          onClick={() => setActivePage('home')}
        >
          <i className="fas fa-home"></i> Home
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'about' ? 'active' : ''}`} 
          onClick={() => setActivePage('about')}
        >
          <i className="fas fa-user"></i> Tentang Saya
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'projects' ? 'active' : ''}`} 
          onClick={() => setActivePage('projects')}
        >
          <i className="fas fa-code"></i> Portofolio
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'contact' ? 'active' : ''}`} 
          onClick={() => setActivePage('contact')}
        >
          <i className="fas fa-envelope"></i> Kontak
        </button>
      </nav>

      {/* 3. Main Content Area: Berubah secara dinamis sesuai tab tanpa scroll */}
      <main className="page-content-wrapper container">
        
        {/* Halaman Home */}
        {activePage === 'home' && (
          <div className="tab-page-content text-center fade-in">
            <p className="hero-tagline" style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '25px', lineHeight: '1.6' }}>
              {personalInfo.tagline}
            </p>
            <div className="about-card" style={{ maxWidth: '700px', margin: '0 auto 30px', textAlign: 'center' }}>
              <p>
                Selamat datang! Ini adalah platform portofolio interaktif saya yang dibangun menggunakan React modern. 
                Silakan gunakan tombol navigasi di atas untuk melihat ringkasan keahlian teknis saya, riwayat pengerjaan proyek 
                *tech engineering*, sistem *IoT*, maupun analisis data secara mendalam.
              </p>
            </div>
            <button onClick={() => setActivePage('projects')} className="btn-primary">
              Jelajahi Proyek Saya <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        )}

        {/* Halaman Tentang Saya & Skills */}
        {activePage === 'about' && (
          <div className="tab-page-content fade-in">
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
          </div>
        )}

        {/* Halaman Portofolio Proyek */}
        {activePage === 'projects' && (
          <div className="tab-page-content fade-in">
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
          </div>
        )}

        {/* Halaman Kontak */}
        {activePage === 'contact' && (
          <div className="tab-page-content text-center fade-in">
            <p style={{ color: '#94a3b8', marginBottom: '35px', fontSize: '1.1rem' }}>
              Saya sangat terbuka untuk mendapatkan peluang magang atau kolaborasi proyek IT profesional.
            </p>
            <div className="social-links-container">
              <a href={`mailto:${personalInfo.contacts.email}`} className="social-icon" title="Email"><i className="fas fa-envelope"></i></a>
              <a href={`tel:${personalInfo.contacts.phone}`} className="social-icon" title="Telepon"><i className="fas fa-phone"></i></a>
              <a href={personalInfo.contacts.linkedin} target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href={personalInfo.contacts.github} target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><i className="fab fa-github"></i></a>
            </div>
          </div>
        )}

      </main>

      <footer className="footer">
        <p>&copy; 2026 {personalInfo.name}. Built with React.js & Modern Tab Layout.</p>
      </footer>
    </div>
  );
}

export default App;