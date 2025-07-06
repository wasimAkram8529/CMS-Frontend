import React, { useState } from "react";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintTable from "./components/ComplaintTable";

function App() {
  const [view, setView] = useState("form"); // 'form' or 'admin'

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Complaint Management System</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setView("form")}>User: Submit Complaint</button>
        <button onClick={() => setView("admin")}>Admin: View Complaints</button>
      </div>

      {view === "form" ? <ComplaintForm /> : <ComplaintTable />}
    </div>
  );
}

export default App;
