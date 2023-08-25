import React from 'react';
import './Templateone.css'; // Import your CSS file for styling

const Resume = ({
  name,
  expertise,
  experience,
  education,
  achievements,
  languages,
  contact,
  about,
  programmingLanguages,
}) => {
  return (
    <div className="resume-container">
      <div className="header">
        <h1>{name}</h1>
        <p>{expertise}</p>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <p>{experience}</p>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>{education}</p>
      </div>
      <div className="section">
        <h2>Achievements</h2>
        <p>{achievements}</p>
      </div>
      <div className="section">
        <h2>Languages</h2>
        <p>{languages}</p>
      </div>
      <div className="section">
        <h2>Contact</h2>
        <p>{contact}</p>
      </div>
      <div className="section">
        <h2>About</h2>
        <p>{about}</p>
      </div>
      <div className="section">
        <h2>Programming Languages</h2>
        <p>{programmingLanguages}</p>
      </div>
    </div>
  );
};

export default Resume;
