import { useState } from "react";
import { skills, type Skill } from "../../data/portfolio";
import "./Skills.css";

type Category = "all" | Skill["category"];

const categoryLabels: Record<Category, string> = {
  all: "Semua",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  other: "Lainnya",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Keahlian</h2>
        <p className="section-subtitle">Teknologi dan tools yang saya kuasai</p>

        <div className="skills__filters">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              className={`skills__filter-btn ${activeCategory === cat ? "skills__filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skills__item hover-scale">
              <span className="skills__icon">{skill.icon}</span>
              <span className="skills__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
