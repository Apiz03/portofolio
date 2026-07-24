import { experiences } from "../../data/portfolio";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Pengalaman</h2>
        <p className="section-subtitle">Perjalanan karir dan pengalaman kerja saya</p>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div
              className={`experience__item hover-scale ${index % 2 === 0 ? "experience__item--left" : "experience__item--right"}`}
              key={exp.id}
            >
              <div className="experience__dot" />
              <div className="experience__card">
                <div className="experience__card-header">
                  <span className="experience__type">{exp.type}</span>
                  <span className="experience__period-badge">📅 {exp.period}</span>
                </div>
                <h3 className="experience__position">{exp.position}</h3>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__location">📍 {exp.location}</p>
                <ul className="experience__desc-list">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="experience__desc-item">{desc}</li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="experience__skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="experience__skill-tag">
                        ◈ {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
