import { certificates } from "../../data/portfolio";
import "./Certificates.css";

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <h2 className="section-title">Sertifikat</h2>
        <p className="section-subtitle">Sertifikasi dan pencapaian profesional saya</p>

        <div className="certificates__grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificates__card hover-scale">
              <div className="certificates__card-image">
                <div className="certificates__pdf-preview">
                  <iframe
                    src={`${cert.pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={cert.title}
                    className="certificates__pdf-iframe"
                  />
                  <div className="certificates__pdf-overlay">
                    <a
                      href={cert.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificates__view-btn"
                    >
                      🔍 Lihat Sertifikat
                    </a>
                  </div>
                </div>
              </div>
              <div className="certificates__card-body">
                <h3 className="certificates__card-title">{cert.title}</h3>
                <p className="certificates__card-issuer">{cert.issuer}</p>
                <p className="certificates__card-date">📅 {cert.date}</p>
                <a
                  href={cert.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificates__card-link"
                >
                  Lihat Sertifikat →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
