import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import fotoProfil from '/assets/img/profile.jpg';
import { portfolioData } from './data/portofolioData'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  // State untuk melacak halaman dan filter
  const [activePage, setActivePage] = useState('home');
  const [activeFilter, setActiveFilter] = useState('All');
  
  // State untuk melacak bahasa yang aktif ('id' atau 'en')
  const [lang, setLang] = useState('id');

  // Efek untuk memunculkan alert saat pertama kali web dimuat
  useEffect(() => {
    const hasSeenAlert = sessionStorage.getItem('langAlerted');
    if (!hasSeenAlert) {
      alert("💡 Info:\nAnda bisa mengubah bahasa web menggunakan tombol ID/EN di pojok kanan atas!\n\nYou can change the website language using the ID/EN button in the top right corner!");
      sessionStorage.setItem('langAlerted', 'true');
    }
  }, []);

  // Ambil data dari portofolioData.js secara dinamis berdasarkan bahasa yang dipilih
  const currentData = portfolioData[lang];
  const personalInfo = currentData.personalInfo;
  const projectsData = currentData.projectsData;

  // Kalkulasi data proyek yang terfilter
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Fungsi untuk mengubah bahasa
  const toggleLanguage = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };

  // Kategori filter dinamis
  const filterCategories = [
    { id: 'All', label: lang === 'id' ? 'Semua' : 'All' },
    { id: 'Tech Engineering', label: 'Tech Engineering' },
    { id: 'Data Analytics', label: 'Data Analytics' },
    { id: 'Social Tech', label: 'Social Tech' }
  ];

  return (
    <div className="app-container">
      
      {/* Tombol Pengganti Bahasa (Sekarang menggunakan class CSS) */}
      <div className="lang-toggle-container">
        <button className="lang-toggle-btn" onClick={toggleLanguage}>
          {lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
        </button>
      </div>

      {/* 1. Header Profile */}
      <header className="profile-header">
        <div className="profile-frame">
        <img src={fotoProfil} alt={personalInfo.name} className="profile-img" />
        </div>
        <h1 className="glitch-text">{personalInfo.name}</h1>
        <h2>{personalInfo.title} | {personalInfo.institution}</h2>
        <div className="badge-container">
          <span className="internship-badge">
            <i className="far fa-calendar-alt"></i> {personalInfo.uiText.internship}
          </span>
        </div>
      </header>

      {/* 2. Navigasi Utama */}
      <nav className="profile-nav">
        <button 
          className={`nav-tab-btn ${activePage === 'home' ? 'active' : ''}`} 
          onClick={() => setActivePage('home')}
        >
          <i className="fas fa-home"></i> {personalInfo.navMenu.home}
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'about' ? 'active' : ''}`} 
          onClick={() => setActivePage('about')}
        >
          <i className="fas fa-user"></i> {personalInfo.navMenu.about}
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'projects' ? 'active' : ''}`} 
          onClick={() => setActivePage('projects')}
        >
          <i className="fas fa-code"></i> {personalInfo.navMenu.portfolio}
        </button>
        <button 
          className={`nav-tab-btn ${activePage === 'contact' ? 'active' : ''}`} 
          onClick={() => setActivePage('contact')}
        >
          <i className="fas fa-envelope"></i> {personalInfo.navMenu.contact}
        </button>
      </nav>

      {/* 3. Main Content Area */}
      <main className="page-content-wrapper container">
        
        {/* Halaman Home */}
        {activePage === 'home' && (
          <div className="tab-page-content text-center fade-in">
            <p className="hero-tagline" style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '25px', lineHeight: '1.6' }}>
              {personalInfo.tagline}
            </p>
            <div className="about-card" style={{ maxWidth: '700px', margin: '0 auto 30px', textAlign: 'center' }}>
              <p>{personalInfo.uiText.welcome}</p>
            </div>
            <button onClick={() => setActivePage('projects')} className="btn-primary">
              {personalInfo.uiText.exploreBtn} <i className="fas fa-arrow-right"></i>
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
                <h3>{personalInfo.uiText.coreTech}</h3>
                <div className="skills-group">
                  <h4>Backend</h4>
                  <div className="tags">
                    {personalInfo.skills.Backend.map(skill => <span key={skill} className="tag">{skill}</span>)}
                  </div>
                </div>
              <div className="skills-group">
                  <h4>Frontend</h4>
                  <div className="tags">
                    {personalInfo.skills.Frontend.map(skill => <span key={skill} className="tag">{skill}</span>)}
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
              {filterCategories.map(category => (
                <button
                  key={category.id}
                  className={`tab-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
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
              {personalInfo.uiText.contactMsg}
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
        <p>&copy; 2026 {personalInfo.name}. {lang === 'id' ? 'Dibuat dengan React.js & Modern Tab Layout.' : 'Built with React.js & Modern Tab Layout.'}</p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;