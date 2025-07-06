import React, { useEffect, useState } from "react";
import axios from "axios";

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/complaints");
    setComplaints(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, { status });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredComplaints = complaints.filter((c) => {
    return (
      (!filterStatus || c.status === filterStatus) &&
      (!filterPriority || c.priority === filterPriority)
    );
  });

  return (
    <div>
      <h2>Admin Panel</h2>

      <div>
        <label>
          Filter by Status:
          <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </label>

        <label>
          Filter by Priority:
          <select onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="">All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
      </div>

      <table border="1" cellPadding="10" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((c) => (
            <tr key={c._id}>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>{c.priority}</td>
              <td>{new Date(c.dateSubmitted).toLocaleDateString()}</td>
              <td>{c.status}</td>
              <td>
                <select
                  value={c.status}
                  onChange={(e) => handleStatusChange(c._id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintTable;
