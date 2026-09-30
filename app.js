const { useState } = React;

function InteractiveProfileCard() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [skills, setSkills] = useState([
    { id: 1, name: "React.js", likes: 18 },
    { id: 2, name: "JavaScript", likes: 24 },
    { id: 3, name: "CSS3 / Glassmorphism", likes: 15 },
  ]);

  const toggleStatus = () => {
    setIsAvailable((prev) => !prev);
  };

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const toggleBio = () => {
    setShowFullBio((prev) => !prev);
  };

  const handleEndorseSkill = (skillId) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === skillId ? { ...skill, likes: skill.likes + 1 } : skill
      )
    );
  };

  return (
    <div className="card-container">
      <div className="interactive-card">
        <div className="card-top">
          <button
            className={`status-badge ${isAvailable ? "available" : "busy"}`}
            onClick={toggleStatus}
            title="Click to toggle status"
          >
            ● {isAvailable ? "Available for Work" : "Currently Busy"}
          </button>

          <button
            className="bookmark-btn"
            onClick={toggleBookmark}
            title="Bookmark profile"
          >
            {isBookmarked ? "★" : "☆"}
          </button>
        </div>

        <div className="profile-avatar-wrapper">
          <div className="avatar">GK</div>
        </div>

        <div className="profile-info">
          <h2>Ganesh Kumar</h2>
          <p className="profile-title">Frontend Engineer & React Developer</p>
          <p className="profile-location">📍 Chennai, India</p>
        </div>

        <div className="bio-section">
          <p>
            {showFullBio
              ? "Passionate web developer specializing in high-performance React SPAs, interactive modern UI components, responsive layout systems, and clean JavaScript architecture."
              : "Passionate web developer specializing in high-performance React SPAs..."}
          </p>
          <button className="toggle-bio-btn" onClick={toggleBio}>
            {showFullBio ? "Show Less ▲" : "Read Full Bio ▼"}
          </button>
        </div>

        <div className="skills-wrapper">
          <h3 className="skills-title">Endorse Skills (useState)</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <button
                  className="endorse-btn"
                  onClick={() => handleEndorseSkill(skill.id)}
                >
                  👍 {skill.likes}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <button
            className="btn-primary"
            onClick={() => alert("Message feature triggered!")}
          >
            Connect With Me
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              alert("Card link copied to clipboard!");
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>
      <InteractiveProfileCard />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);