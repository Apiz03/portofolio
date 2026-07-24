// Data portofolio Ahmad Hafidz
// Sesuaikan data ini dengan informasi terbaru Anda

export const personalInfo = {
  name: "Ahmad Hafidz",
  tagline: "Web Developer & IT Enthusiast",
  description:
    "Saya adalah seorang developer yang bersemangat dalam membangun aplikasi web dan mobile yang modern, responsif, dan berdampak. Selalu belajar teknologi baru dan mengembangkan skill untuk menciptakan solusi digital terbaik.",
  email: "ahmadhafidz2005@gmail.com",
  phone: "+62 851-5624-4205",
  location: "Bandung, West Java, Indonesia",
  linkedin: "https://www.linkedin.com/in/ahmad-hafidz-255a30289/",
  github: "https://github.com/Apiz03",
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/6285156244205",
  resumeUrl: "#",
};

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  type: "Full-time" | "Internship" | "Hybrid" | "Part-time";
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Assistant Project Manager",
    company: "BigBox AI",
    period: "Jul 2026 - Sekarang",
    location: "Kecamatan Kebayoran Baru, Jakarta, Indonesia · On-site",
    type: "Internship",
    description: [
      "Mendukung proses perencanaan, koordinasi, dan pemantauan proyek agar berjalan sesuai target dan jadwal yang telah ditetapkan",
      "Membantu dalam penyusunan dokumentasi proyek, pembuatan notulen rapat, pemantauan tindak lanjut (follow-up) setiap aktivitas",
      "Berkoordinasi dengan berbagai pihak untuk memastikan komunikasi berjalan dengan baik",
      "Terlibat dalam penyusunan laporan progres proyek dan mendukung upaya peningkatan proses kerja",
    ],
    skills: ["Project Management"],
  },
  {
    id: 2,
    position: "Event And Competition",
    company: "SAG Laboratory",
    period: "Jan 2026 - Sekarang",
    location: "Bandung Regency, West Java, Indonesia · On-site",
    type: "Full-time",
    description: [
      "Bekerja purnawaktu dengan fokus utama mengelola divisi Event and Competition",
      "Menjadi motor penggerak dari tahap brainstorming ide, perencanaan strategi, hingga eksekusi acara di lapangan",
      "Bertanggung jawab memastikan setiap kompetisi dan acara berjalan sesuai standar tinggi laboratorium",
      "Manajemen peserta, koordinasi stakeholder, pengawasan logistik acara",
    ],
    skills: ["Perencanaan Acara"],
  },
  {
    id: 3,
    position: "Community Contributors",
    company: "Dicoding Indonesia",
    period: "Des 2025 - Feb 2026 · 3 bulan",
    location: "Bandung, West Java, Indonesia · Hybrid",
    type: "Hybrid" as Experience["type"],
    description: [
      "Berkontribusi sebagai Front-End developer dalam komunitas Dicoding Indonesia",
    ],
    skills: ["HTML", "CSS", "Front-End"],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Happy New Year",
    description:
      "Website ucapan tahun baru dengan animasi dan efek visual yang menarik.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Apiz03/happy-new-year",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi yang dibangun dengan React dan TypeScript.",
    technologies: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/Apiz03",
  },
  {
    id: 3,
    title: "Aplikasi Mobile",
    description:
      "Aplikasi mobile untuk manajemen tugas dengan fitur notifikasi dan sinkronisasi.",
    technologies: ["React Native", "Firebase", "Node.js"],
    githubUrl: "https://github.com/Apiz03",
  },
];

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  { name: "HTML5", icon: "🌐", category: "frontend" },
  { name: "CSS3", icon: "🎨", category: "frontend" },
  { name: "JavaScript", icon: "⚡", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Tailwind CSS", icon: "💨", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "PHP", icon: "🐘", category: "backend" },
  { name: "MySQL", icon: "🗄️", category: "backend" },
  { name: "Git", icon: "📦", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Figma", icon: "🖌️", category: "tools" },
  { name: "Linux", icon: "🐧", category: "other" },
  { name: "Networking", icon: "🌍", category: "other" },
];

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  pdfFile: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy / NDG",
    date: "2025",
    pdfFile: "/assets/Linux_Essentials_certificate.pdf",
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2025",
    pdfFile: "/assets/sertifikat_course_123.pdf",
  },
  {
    id: 3,
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "2026",
    pdfFile: "/assets/sertifikat_course_570.pdf",
  },
];

export const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Proyek", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];
