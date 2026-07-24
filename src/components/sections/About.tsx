import { personalInfo } from "../../data/portfolio";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Tentang Saya</h2>
        <p className="section-subtitle">Kenali lebih dekat siapa saya</p>

        <div className="about__grid">
          <div className="about__card hover-scale">
            <div className="about__card-icon">🎯</div>
            <h3 className="about__card-title">Visi</h3>
            <p className="about__card-text">
              Mengembangkan solusi digital yang berdampak positif dan membantu
              bisnis tumbuh melalui teknologi modern.
            </p>
          </div>

          <div className="about__card hover-scale">
            <div className="about__card-icon">💡</div>
            <h3 className="about__card-title">Passion</h3>
            <p className="about__card-text">
              Bersemangat dalam membangun aplikasi web dan mobile yang intuitif,
              cepat, dan responsif dengan pengalaman pengguna terbaik.
            </p>
          </div>

          <div className="about__card hover-scale">
            <div className="about__card-icon">📚</div>
            <h3 className="about__card-title">Pembelajaran</h3>
            <p className="about__card-text">
              Selalu belajar teknologi baru dan mengikuti perkembangan dunia IT
              untuk menghasilkan solusi yang inovatif dan relevan.
            </p>
          </div>
        </div>

        <div className="about__details">
          <div className="about__info">
            <h3 className="about__info-title">Siapa saya?</h3>
            <p className="about__info-text">{personalInfo.description}</p>
            <div className="about__info-list">
              <div className="about__info-item">
                <span className="about__info-label">📍 Lokasi</span>
                <span className="about__info-value">{personalInfo.location}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">✉️ Email</span>
                <span className="about__info-value">{personalInfo.email}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">🔗 LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__info-link"
                >
                  Ahmad Hafidz
                </a>
              </div>
            </div>
          </div>

          <div className="about__stats">
            <div className="about__stat hover-scale">
              <span className="about__stat-number">2+</span>
              <span className="about__stat-label">Tahun Pengalaman</span>
            </div>
            <div className="about__stat hover-scale">
              <span className="about__stat-number">5+</span>
              <span className="about__stat-label">Proyek Selesai</span>
            </div>
            <div className="about__stat hover-scale">
              <span className="about__stat-number">3+</span>
              <span className="about__stat-label">Sertifikat</span>
            </div>
            <div className="about__stat hover-scale">
              <span className="about__stat-number">10+</span>
              <span className="about__stat-label">Teknologi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
