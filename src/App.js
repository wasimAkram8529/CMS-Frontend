import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintTable from "./components/ComplaintTable";
import ComplaintDetail from "./components/complaintDetail";

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Complaint Management System</h1>

        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/submit">
            <button>User: Submit Complaint</button>
          </Link>
          <Link to="/admin">
            <button>Admin: View Complaints</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ComplaintForm />} />
          <Route path="/submit" element={<ComplaintForm />} />
          <Route path="/admin" element={<ComplaintTable />} />
          <Route path="/complaints/:id" element={<ComplaintDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
