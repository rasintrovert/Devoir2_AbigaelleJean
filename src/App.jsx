import React from "react";
import "./App.css";
import InfoCard from "./components/InfoCard.jsx";
import ProgressCard from "./components/ProgressCard.jsx";

function App() {
  return (
    <div className="dashboard">
      <div className="left-panel">
        <div className="logo-container">
          <img src="/sonar-logo.png" alt="Sonar logo" className="logo-img" />
          <span className="logo-text">Sonar</span>
        </div>

        <div className="big-box"></div>
      </div>

      <div className="right-panel">
        <h2 className="main-title">
          Resulting in more secure, reliable, and <br /> maintainable software
        </h2>

        <div className="cards-grid">
          <InfoCard title="Security" value="0" valueSuffix="Open issues" badge="A" />
          <InfoCard title="Reliability" value="0" valueSuffix="Open issues" badge="A" />
          <InfoCard title="Maintainability" value="1" valueSuffix="Open issues" badge="A" />
          <InfoCard title="Accepted issues" value="0" description="Valid issues that were not fixed" badge="⏱" />

          <ProgressCard
            title="Coverage"
            value="97.1%"
            description="On 552 lines to cover."
            progressType="ring"
          />
          <ProgressCard
            title="Duplications"
            value="0.0%"
            description="On 27 lines."
            progressType="dot"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
