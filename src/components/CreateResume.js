import React, { useRef, useState } from 'react';
import ResumeBuilder from './Templates';
const ResumeBuilderForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [achievements, setAchievements] = useState('');
  const [languages, setLanguages] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [companies, setCompanies] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const [about, setAbout] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState('');



  const formRef = useRef(null); // Create a ref for the form element

  //   const [data, setdata] = useState(null)

  //   const onchange = (e) => {
  //     // to prevent the reload of the page 
  //     // mtlb intial to note ki value rehnedo agar chaange to hoo overwrite kardo 
  //     setdata({ ...note, [e.target.name]: e.target.value })
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      // Other form fields...
    };
    onSubmit(userData); // Pass user data to parent component
  };

  const handleResetClick = () => {
    setInstagram('')
    setGithub('')
  }

  return (
    <div className="container mt-8">
      <h1 className=" fs-10 mb-4 font-weight-bold " >Enter the Details :</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column border border-dark p-6 ' >
        <div className="mb-3">
          <label htmlFor="name" value={name} name={name} className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="about" name={about} value={about} className="form-label">About Me:</label>
          <textarea
            id="about"
            className="form-control"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <small className="form-text text-muted">
            Write a brief description about yourself.
          </small>
        </div>
        {/* Other input fields for name, skills, experience, education, achievements, languages, email, and phone number */}
        <div className="mb-3">
          <label htmlFor="expertise" name={expertise} value={expertise} className="form-label">Expertise:</label>
          <textarea
            id="expertise"
            className="form-control"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
          <small className="form-text text-muted">
            Enter your expertise as a list of bullet points, each point on a new line.
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="experience" name={experience} value={experience} className="form-label">Experience:</label>
          <textarea
            id="experience"
            className="form-control"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="education" value={education} name={education} className="form-label">Education:</label>
          <textarea
            id="education"
            className="form-control"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="achievements" name={achievements} value={achievements} className="form-label">Achievements:</label>
          <textarea
            id="achievements"
            className="form-control"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="languages" value={languages} name={languages} className="form-label">Languages Known:</label>
          <input
            type="text"
            id="languages"
            className="form-control"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="programmingLanguages" value={programmingLanguages} name={programmingLanguages} className="form-label">Programming Languages:</label>
          <textarea
            id="programmingLanguages"
            className="form-control"
            value={programmingLanguages}
            onChange={(e) => setProgrammingLanguages(e.target.value)}
            required
          />
          <small className="form-text text-muted">
            Enter the programming languages you know, each language on a new line.
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="companies" name={companies} value={companies} className="form-label">Companies Worked With:</label>
          <textarea
            id="companies"
            className="form-control"
            value={companies}
            onChange={(e) => setCompanies(e.target.value)}
            required
          />
          <small className="form-text text-muted">
            Enter the names of companies you've worked with, each company on a new line.
          </small>
        </div>

        <div className="mb-3">
          <label htmlFor="contact" name={contact} value={contact} className="form-label">Contact Details:</label>
          <input
            type="text"
            id="contact"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        {/* Other input fields for name, skills, experience, education, achievements, and languages */}
        <div className="mb-3">
          <label htmlFor="email" value={email} name={email} className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Other input fields for name, skills, experience, education, achievements, languages, email, and phone number */}
        <div className="mb-3">
          <label htmlFor="linkedin" value={linkedin} name={linkedin} className="form-label">LinkedIn:</label>
          <input
            type="url"
            id="linkedin"
            className="form-control"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instagram" value={instagram} name={instagram} className="form-label">Instagram Id :</label>
          <input
            type="url"
            id="instagram"
            className="form-control"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="facebook" value={facebook} name={facebook} className="form-label">Facebook Id :</label>
          <input
            type="url"
            id="facebook"
            className="form-control"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="twitter" value={twitter} name={twitter} className="form-label">Twitter Account :</label>
          <input
            type="url"
            id="twitter"
            className="form-control"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="github" value={github} name={github} className="form-label">GitHub Account :</label>
          <input
            type="url"
            id="github"
            className="form-control"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
      </form>
      <div className='d-flex justify-content-between my-5'>
        <button type="reset" ref={formRef} className="btn btn-primary btn-no-hover">Reset Details</button>
        <button type="submit" onClick={handleResetClick} className="btn  btn-primary btn-no-hover">Submit and Get Resume</button>
      </div>
      <ResumeBuilder
        name={name}
        expertise={expertise}
        experience={experience}
        education={education}
        achievements={achievements}
        languages={languages}
        contact={contact}
        email={email}
        companies={companies}
        linkedin={linkedin}
        instagram={instagram}
        facebook={facebook}
        twitter={twitter}
        github={github}
        about={about}
        programmingLanguages={programmingLanguages}
      />
      {/* <button type="submit" className="btn btn-primary">Submit</button> */}
    </div>
  );
};

export default ResumeBuilderForm;
