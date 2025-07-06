import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ComplaintDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    axios
      .get(`https://cms-backend-8mck.onrender.com/api/complaints/${id}`)
      .then((res) => setComplaint(res.data))
      .catch((err) => console.error("Error fetching complaint:", err));
  }, [id]);

  if (!complaint) return <p>Loading...</p>;

  return (
    <div className="complaint-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2>{complaint.title}</h2>
      <div className="complaint-field">
        <strong>Category:</strong> {complaint.category}
      </div>
      <div className="complaint-field">
        <strong>Priority:</strong> {complaint.priority}
      </div>
      <div className="complaint-field">
        <strong>Status:</strong> {complaint.status}
      </div>
      <div className="complaint-field complaint-description">
        <strong>Description:</strong>
        <div>{complaint.description}</div>
      </div>
      <div className="complaint-field">
        <strong>Submitted On:</strong>{" "}
        {new Date(complaint.dateSubmitted).toLocaleString()}
      </div>
    </div>
  );
}

export default ComplaintDetail;
