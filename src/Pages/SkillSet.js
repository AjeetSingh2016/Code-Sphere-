import React from 'react';
import './SkillSet.css'; // Import the CSS file for styling

const SkillSet = () => {
  return (
    <div className="skill-set portfolio--container">
     <h2 className="skills--section--heading">Skills</h2>
      <div className="category">
        <h3>Languages:</h3>
        <p>C++, Java, JavaScript, HTML+CSS, ES6</p>
      </div>
      <div className="category">
        <h3>Libraries:</h3>
        <p>Java Collection, React Js, Tailwind CSS, Material UI</p>
      </div>
      <div className="category">
        <h3>Dev Tools:</h3>
        <p>Nodejs, Gradle, Git, Github, Redux, Figma, Postman</p>
      </div>
      <div className="category">
        <h3>Frameworks:</h3>
        <p>Express Js, React Native</p>
      </div>
      <div className="category">
        <h3>Cloud/Databases:</h3>
        <p>Mongo Db, Firebase, Vercel, Netlify</p>
      </div>
      <div className="category">
        <h3>Relevant Coursework:</h3>
        <p>Networking, Operating Systems, Object-Oriented Programming</p>
      </div>
      <div className="category">
        <h3>Platforms:</h3>
        <p>VScode, Android Studio, NetBeans</p>
      </div>
    </div>
  );
}

export default SkillSet;
