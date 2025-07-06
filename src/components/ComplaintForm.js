import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Product",
    priority: "Low",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://cms-backend-rose.vercel.app/api/complaints",
        formData
      );
      alert("Complaint submitted successfully!");
      setFormData({
        title: "",
        description: "",
        category: "Product",
        priority: "Low",
      });
    } catch (err) {
      alert("Failed to submit complaint");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Complaint</h2>

      <label>
        Title:{" "}
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />

      <label>
        Description:
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Product</option>
          <option>Service</option>
          <option>Support</option>
        </select>
      </label>
      <br />
      <br />

      <label>
        Priority:
        <label>
          <input
            type="radio"
            name="priority"
            value="Low"
            checked={formData.priority === "Low"}
            onChange={handleChange}
          />{" "}
          Low
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="Medium"
            checked={formData.priority === "Medium"}
            onChange={handleChange}
          />{" "}
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="High"
            checked={formData.priority === "High"}
            onChange={handleChange}
          />{" "}
          High
        </label>
      </label>
      <br />
      <br />

      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default ComplaintForm;
