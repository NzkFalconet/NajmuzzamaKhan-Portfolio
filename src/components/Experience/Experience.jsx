import React from 'react';
import './Experience.css'; // Optional: create a separate CSS file for styles

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-content">
                <div className="experience-list">
                    <h2>Experience</h2>
                    <div className="experience-item">
                        <h3>Job Title 1</h3>
                        <p>Company Name 1 - Duration</p>
                        <p>Description of your role and achievements.</p>
                    </div>
                    <div className="experience-item">
                        <h3>Job Title 2</h3>
                        <p>Company Name 2 - Duration</p>
                        <p>Description of your role and achievements.</p>
                    </div>
                    {/* Add more experience items as needed */}
                </div>
                <div className="expertise">
                    <h2>Expertise</h2>
                    <h3>Frontend Development</h3>
                    <p>Detail your frontend development skills and technologies.</p>
                    <h3>Backend Development</h3>
                    <p>Detail your backend development skills and technologies.</p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
