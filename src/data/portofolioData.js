export const portfolioData = {
  id: {
    personalInfo: {
      name: "Andy Aldyansyah",
      title: "Mahasiswa Teknik Informatika",
      institution: "Universitas Duta Bangsa Surakarta",
      tagline: "Full-stack Developer & IoT Specialist yang berfokus pada efisiensi kode dan analisis masalah.",
      about: "Mahasiswa Teknik Informatika yang berfokus pada Full-stack Development dan IoT. Memiliki rekam jejak dalam mengelola 32 repositori GitHub serta berpengalaman membangun aplikasi mobile dengan Flutter dan sistem web menggunakan CodeIgniter 4 dan React.js. Terbukti sebagai fast-learner dengan kemampuan menguasai fundamental teknologi baru secara mandiri dalam waktu singkat serta memiliki keahlian mendalam dalam analisis masalah (debugging).",
      skills: {
        Backend: ["Dart", "PHP", "Python", "JavaScript", "REST API", "Kotlin", "MYSQL", "SQLite", "GOLang"],
        Frontend: ["HTML5", "CSS3", "Dart", "Java", "Bootstrap"],
        frameworks: ["React.js", "Flutter", "CodeIgniter 4", "Laravel", "Wails.JS", "Bootstrap"],
        iot: ["ESP32", "Arduino", "MQTT Protocol", "Sensor Integration"],
        tools: ["Git/GitHub", "Visual Studio Code", "Java NetBeans", "XAMPP"]
      },
      contacts: {
        email: "andyaldyansyah11@gmail.com",
        phone: "0821-4075-2041",
        github: "https://github.com/AndyAldy",
        linkedin: "https://www.linkedin.com/in/andy-aldyansyah"
      },
      navMenu: {
        home: "Home",
        about: "Tentang Saya",
        portfolio: "Portofolio",
        contact: "Kontak"
      },
      uiText: {
        internship: "Available for Internship: Juli 2026",
        welcome: "Selamat datang! Ini adalah platform portofolio interaktif saya yang dibangun menggunakan React modern. Silakan gunakan tombol navigasi di atas untuk melihat ringkasan keahlian teknis saya, riwayat pengerjaan proyek tech engineering, sistem IoT, maupun analisis data secara mendalam.",
        exploreBtn: "Jelajahi Proyek Saya",
        coreTech: "Core Technical Expertise",
        contactMsg: "Saya sangat terbuka untuk mendapatkan peluang magang atau kolaborasi proyek IT profesional."
      }
    },
    projectsData: [
      {
        id: 1,
        title: "Telco Customer Churn Analysis",
        category: "Data Analytics",
        description: "Melakukan analisis data mendalam menggunakan dataset Telco Customer Churn untuk memprediksi tingkat retensi pelanggan, mengidentifikasi pola kebiasaan pengguna, serta menyusun rekomendasi strategi berbasis data.",
        tech: ["Python", "Altair AI Studio", "Data Analytics", "Data Modeling", "CSV"],
        link: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn", // 🔗 Link Repositori GitHub
      },
      {
        id: 2,
        title: "Web Manajemen Toko Kelontong",
        category: "Tech Engineering",
        description: "Mengembangkan aplikasi web manajemen toko secara mandiri menggunakan React.js dalam waktu 7 hari. Mengimplementasikan struktur frontend yang responsif, cepat, dan efisien untuk pengelolaan data inventaris barang.",
        tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API"],
        demoUrl: "https://project-kwu-pied.vercel.app/" // 🔗 
      },
      {
        id: 3,
        title: "GrowME - Mutual Fund Calculator",
        category: "Tech Engineering",
        description: "Merancang dan membangun aplikasi mobile kalkulator finansial khusus untuk simulasi dan perhitungan proyeksi keuntungan investasi reksadana secara presisi.",
        tech: ["Flutter", "Dart", "Mobile Development", "UI/UX Design"],
        link: "https://drive.google.com/file/d/1-RaW4pyP2ymiqJUp8-XL-ZCzsVDi5n-v/view?usp=sharing",
      },
      {
        id: 4,
        title: "Digitalisasi & Pengembangan Potensi Desa Beji",
        category: "Social Tech",
        description: "Berkontribusi dalam program pengabdian masyarakat (KKN) dengan fokus utama pada pemanfaatan platform digital untuk manajemen dokumentasi teknis serta publikasi potensi lokal desa.",
        tech: ["Web Technologies", "Digitalization", "Technical Documentation"],// 🔗 Bisa diisi link website desanya
        demoUrl: "https://wisatangawen.vercel.app/" // 🔗 
      },
      {
        id: 5,
        title: "Aplikasi Servis Motor",
        category: "Tech Engineering",
        description: "Pertama kali Membangun Aplikasi Desktop/Software berbasis Golang yang berfokus pada monitoring Servis Motor supaya bisa mengetahui apakah Motor sudah selesai di servis atau belum",
        tech: ["Wails React.js", "MySQL", "Xampp", "PHPMYADMIN", "CSS", "GOLang"],
        link: "https://drive.google.com/file/d/1ynz2D1vb0Zh5xxnJwFUyfGSpMGX-pP9j/view?usp=sharing", // 🔗
      },
      {
        id: 6,
        title: "Sistem Rekomendasi Musik dan Film",
        category: "Tech Engineering & Data Analytics",
        description: "Membuat Website Sistem menggunakan datasets dari kaggle dan API dari TMDB untuk mengambil gambarnya dan menggunakan url dari Itunes untuk gambar musiknya, Sistem ini dibuat untuk menyelesaikan project akhir mata kuliah Sistem Rekomendasi",
        tech: ["CSV", "React.js", "Xampp", "CSS"],
        link: ["https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata", "https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset"],
        demoUrl: "https://recommendation-music-movies.vercel.app/" // 🔗 
      },
      {
        id: 7,
        title: "Sistem Segmentasi Pelanggan",
        category: "Tech Engineering & Data Analytics",
        description: "Membuat Sistem berbasis website menggunakan React.js sebagai framework untuk memenuhi Project UAS dari mata kuliah Data Mining yang menggunakan metode Clustering dan model K-Means",
        tech: ["React.js", "MySQL", "Tailwind CSS", "CSV"],
        link: "https://www.kaggle.com/datasets/imakash3011/customer-personality-analysis",
        demoUrl: "https://customer-segmentation-rosy.vercel.app/",
      }
    ]
  },
  en: {
    personalInfo: {
      name: "Andy Aldyansyah",
      title: "Informatics Engineering Student",
      institution: "Duta Bangsa University Surakarta",
      tagline: "Full-stack Developer & IoT Specialist focused on code efficiency and problem analysis.",
      about: "Informatics Engineering student focusing on Full-stack Development and IoT. Has a track record of managing 32 GitHub repositories and experienced in building mobile applications with Flutter and web systems using CodeIgniter 4 and React.js. Proven as a fast-learner with the ability to master new technology fundamentals independently in a short time and has deep expertise in problem analysis (debugging).",
      skills: { 
        Backend: ["Dart", "PHP", "Python", "JavaScript", "REST API", "Kotlin", "MYSQL", "SQLite", "GOLang"],
        Frontend: ["HTML5", "CSS3", "Dart", "Java", "Bootstrap"],
        frameworks: ["React.js", "Flutter", "CodeIgniter 4", "Laravel", "Wails.JS", "Bootstrap"],
        iot: ["ESP32", "Arduino", "MQTT Protocol", "Sensor Integration"],
        tools: ["Git/GitHub", "Visual Studio Code", "Java NetBeans", "XAMPP"]
      },
      contacts: {
        email: "andyaldyansyah11@gmail.com",
        phone: "0821-4075-2041",
        github: "https://github.com/AndyAldy",
        linkedin: "https://www.linkedin.com/in/andy-aldyansyah"
      },
      navMenu: {
        home: "Home",
        about: "About Me",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      uiText: {
        internship: "Available for Internship: July 2026",
        welcome: "Welcome! This is my interactive portfolio platform built using modern React. Please use the navigation buttons above to explore a summary of my technical skills, my track record in tech engineering projects, IoT systems, and in-depth data analysis.",
        exploreBtn: "Explore My Projects",
        coreTech: "Core Technical Expertise",
        contactMsg: "I am highly open to internship opportunities or professional IT project collaborations."
      }
    },
    projectsData: [
      {
        id: 1,
        title: "Telco Customer Churn Analysis",
        category: "Data Analytics",
        description: "Conducted in-depth data analysis using the Telco Customer Churn dataset to predict customer retention rates, identify user habit patterns, and develop data-driven strategy recommendations.",
        tech: ["Python", "Altair AI Studio", "Data Analytics", "Data Modeling", "CSV"],
        link: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn", // 🔗 
      },
      {
        id: 2,
        title: "Grocery Store Management Web",
        category: "Tech Engineering",
        description: "Developed a web-based store management application independently using React.js within 7 days. Implemented a responsive, fast, and efficient frontend structure for managing inventory data.",
        tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API"],
        demoUrl: "https://project-kwu-pied.vercel.app/" // 🔗 
      },
      {
        id: 3,
        title: "GrowME - Mutual Fund Calculator",
        category: "Tech Engineering",
        description: "Designed and built a mobile financial calculator application specifically for precise simulation and calculation of mutual fund investment profit projections.",
        tech: ["Flutter", "Dart", "Mobile Development", "UI/UX Design"],
        link: "https://drive.google.com/file/d/1-RaW4pyP2ymiqJUp8-XL-ZCzsVDi5n-v/view?usp=sharing",
      },
      {
        id: 4,
        title: "Digitalization & Development of Beji Village Potential",
        category: "Social Tech",
        description: "Contributed to a community service program (KKN) with a main focus on utilizing digital platforms for technical documentation management and the publication of local village potential.",
        tech: ["Web Technologies", "Digitalization", "Technical Documentation"],
        demoUrl: "https://wisatangawen.vercel.app/"
      },
      {
        id: 5,
        title: "Motorcycle Service Application",
        category: "Tech Engineering",
        description: "Built my first Desktop/Software Application based on Golang, focusing on monitoring Motorcycle Services to track whether a motorcycle is still being serviced or has been completed.",
        tech: ["Wails React.js", "MySQL", "Xampp", "PHPMYADMIN", "CSS", "GOLang"],
        link: "https://drive.google.com/file/d/1ynz2D1vb0Zh5xxnJwFUyfGSpMGX-pP9j/view?usp=sharing",
      },
      {
        id: 6,
        title: "Movie and Music Recommendation System",
        category: "Tech Engineering & Data Analytics",
        description: "Built a web-based system using datasets from Kaggle and the TMDB API to fetch movie images, along with iTunes URLs for music images. This system was developed as the final project for the Recommendation Systems course.",
        tech: ["CSV", "React.js", "Xampp", "CSS"],
        link: ["https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata", "https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset"],
        demoUrl: "https://recommendation-music-movies.vercel.app/" // 🔗 
      },
      {
        id: 7,
        title: "Customer Segmentation System",
        category: "Tech Engineering & Data Analytics",
        description: "Built a website-based system using React.js to satisfy the final exam project for the Data Mining course, applying clustering techniques and the K-Means model.",
        tech: ["React.js", "MySQL", "Tailwind CSS", "CSV"],
        link: "https://www.kaggle.com/datasets/imakash3011/customer-personality-analysis",
        demoUrl: "https://customer-segmentation-rosy.vercel.app/",
      }
    ]
  }
};