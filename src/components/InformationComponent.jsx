import React, { useState, useEffect } from "react";

const InformationComponent = ({ project, onClose }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (project.jobType === "Full-time") {
      setBackgroundColor("bg-pink-300");
    } else if (project.jobType === "Part-time") {
      setBackgroundColor("bg-purple-300");
    } else if (project.jobType === "Freelance") {
      setBackgroundColor("bg-yellow-300");
    } else {
      setBackgroundColor("bg-gray-200");
    }
  }, [project]);

  return (
    <div className={`modal ${backgroundColor}`}>
      <div className="modal-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Project Details</h3>
          <p className="py-4">
            <strong>Date:</strong> {project.date}
            <br />
            <strong>Company:</strong> {project.company}
            <br />
            <strong>Department:</strong> {project.department}
            <br />
            <strong>Job Type:</strong> {project.jobType}
            <br />
          </p>
          {/* Add your form elements here */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
            />
          </div>

          {/* Add more form elements as needed */}
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary" onClick={onClose}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationComponent;
