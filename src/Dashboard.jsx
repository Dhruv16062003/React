import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [isHost, setIsHost] = useState(true);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="header">
            <h1 className="title">
              Hello, Mayank Singh <span className="status">&#x2022;</span>
            </h1>
            <p className="subtitle">Lorem ipsum</p>
          </div>

          <div className="toggle-buttons">
            <button
              className={`toggle-button ${isHost ? "active" : "inactive"}`}
              onClick={() => setIsHost(true)}
            >
              Host
            </button>
            <button
              className={`toggle-button ${!isHost ? "active" : "inactive"}`}
              onClick={() => setIsHost(false)}
            >
              Guest
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <h2 className="stat-value">07</h2>
              <p className="stat-label">Lorem ipsum</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-value">15</h2>
              <p className="stat-label">Lorem ipsum</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-value">28</h2>
              <p className="stat-label">Lorem ipsum</p>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <h3 className="card-title">Invites</h3>
              <p className="card-text">Lorem ipsum</p>
            </div>
            <div className="card">
              <h3 className="card-title">Watchlist</h3>
              <p className="card-text">Lorem ipsum</p>
            </div>
            <div className="card">
              <h3 className="card-title">Location</h3>
              <p className="card-text">Lorem ipsum</p>
            </div>
            <div className="card">
              <h3 className="card-title">Profile</h3>
              <p className="card-text">Lorem ipsum</p>
            </div>
          </div>
          <button className="invite-button">+ Invite Guest</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;