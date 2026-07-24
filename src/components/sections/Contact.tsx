import { useState, type FormEvent } from "react";
import { personalInfo } from "../../data/portfolio";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Untuk sementara, buka email client
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Dari: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Hubungi Saya</h2>
        <p className="section-subtitle">Ada pertanyaan atau ingin bekerja sama? Silakan hubungi saya</p>

        <div className="contact__wrapper">
          <div className="contact__info">
            <h3 className="contact__info-title">Informasi Kontak</h3>
            <p className="contact__info-desc">
              Jangan ragu untuk menghubungi saya melalui formulir ini atau langsung melalui media sosial saya.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">✉️</span>
                <div>
                  <p className="contact__info-label">Email</p>
                  <a href={`mailto:ahmadhafidz2005@gmail.com`} className="contact__info-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📱</span>
                <div>
                  <p className="contact__info-label">WhatsApp</p>
                  <a
                    href="https://wa.me/6285156244205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__info-value"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <p className="contact__info-label">Lokasi</p>
                  <p className="contact__info-value">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="contact__social-link hover-scale" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social-link hover-scale" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link hover-scale" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Nama</label>
              <input
                id="contact-name"
                type="text"
                className="contact__input"
                placeholder="Nama lengkap Anda"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                placeholder="email@contoh.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-subject" className="contact__label">Subjek</label>
              <input
                id="contact-subject"
                type="text"
                className="contact__input"
                placeholder="Subjek pesan"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Pesan</label>
              <textarea
                id="contact-message"
                className="contact__textarea"
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="contact__submit hover-scale"
              id="contact-submit"
            >
              {isSubmitted ? "✓ Terkirim!" : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
