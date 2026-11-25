import React from 'react'
import Navbar from './Navbar'
import './App.css'
import courses from './courses'




import "./App.css";

function App() {
  const tasks = [
    { task: "Design a new homepage", project: "Website", category: "UI", status: "Completed" },
    { task: "Update database", project: "Search App", category: "DB", status: "In Progress" },
    { task: "Create mobile layout", project: "Mobile App", category: "Design", status: "Pending" },
    { task: "Prepare project report", project: "HR Reporting", category: "Report", status: "In Progress" },
    { task: "Fix login issue", project: "Sales System", category: "Bug Fix", status: "Completed" },
  ];

  const projects = [
    { name: "Website Redesign", status: "Active" },
    { name: "Search App", status: "Active" },
    { name: "Mobile App", status: "Pending" },
    { name: "HR Reporting", status: "Active" },
    { name: "Sales System", status: "Active" },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>⚡ PulseWorks AI</h2>

        <nav>
          <a className="active">🏠 Dashboard</a>
          <a>📁 Projects</a>
          <a>📋 Tasks</a>
          <a>👥 Team</a>
          <a>📊 Reports</a>
          <a>⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">

        <header>
          <h1>Welcome back, Praveen 👋</h1>
          <p>Here's what's happening in your workspace today.</p>
        </header>

        {/* Summary Cards */}
        <section className="cards">

          <div className="card">
            <h3>📁 Total Projects</h3>
            <h1>24</h1>
          </div>

          <div className="card">
            <h3>📋 Total Tasks</h3>
            <h1>1,248</h1>
          </div>

          <div className="card">
            <h3>👥 Active Members</h3>
            <h1>18</h1>
          </div>

          <div className="card">
            <h3>⏳ Pending Tasks</h3>
            <h1>96</h1>
          </div>

        </section>

        {/* Tables */}
        <section className="content">

          <div className="table-section">
            <h2>Recent Tasks</h2>

            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Project</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((item, index) => (
                  <tr key={index}>
                    <td>{item.task}</td>
                    <td>{item.project}</td>
                    <td>{item.category}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase().replace(" ", "-")}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Active Projects */}
          <div className="projects">
            <h2>Active Projects</h2>

            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <span>📂 {project.name}</span>
                <span className="project-status">{project.status}</span>
              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;

