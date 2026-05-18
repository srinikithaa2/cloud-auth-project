import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <nav className="navbar">
        <div className="logo">JobTrack Pro</div>

        <button className="logout-btn">
          Logout
        </button>
      </nav>

      <div className="dashboard-content">

        <div className="welcome-section">
          <h1>Track Your Job Applications</h1>

          <p>
            Organize and monitor your internship and job applications efficiently.
          </p>
        </div>

        <div className="stats-container">

          <div className="stat-card">
            <h2>12</h2>
            <p>Total Applications</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>Interviews</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>Offers</p>
          </div>

        </div>

        <div className="applications-section">

          <h2>Recent Applications</h2>

          <div className="job-card">
            <div>
              <h3>Google</h3>
              <p>Software Engineering Intern</p>
            </div>

            <span className="status applied">
              Applied
            </span>
          </div>

          <div className="job-card">
            <div>
              <h3>Microsoft</h3>
              <p>Frontend Developer Intern</p>
            </div>

            <span className="status interview">
              Interview
            </span>
          </div>

          <div className="job-card">
            <div>
              <h3>Amazon</h3>
              <p>Cloud Support Associate</p>
            </div>

            <span className="status rejected">
              Rejected
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;