import React from 'react';
import './Home.css';
import Button from '../Button';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Icon for Resume

const Home = ({ isDarkMode }) => {
    const handleResumeClick = () => {
        window.open('https://drive.google.com/file/d/1VCNnGhU7FoAmUqUaINOtboafKYHBSbhF/view?usp=sharing', '_blank'); // Replace with your Google Drive link
    };

    return (
        <section id="home" className={`home-section ${isDarkMode ? 'dark' : ''}`}>
            { isDarkMode && <div>
            <img
                src="https://ephraimportfolio.vercel.app/static/media/pattern-2.a80a09f3391191f798747f4d585a26e0.svg"
                width="77"
                height="26"
                alt="Your Name"
                className="shape shape-1"
            />
            <img
                src="https://ephraimportfolio.vercel.app/static/media/pattern-2.a80a09f3391191f798747f4d585a26e0.svg"
                width="30"
                height="96"
                alt="Your Name"
                className="shape shape-2"
            />
            <img
                src="https://ephraimportfolio.vercel.app/static/media/pattern-2.a80a09f3391191f798747f4d585a26e0.svg"
                width="47"
                height="46"
                alt="Your Name"
                className="shape shape-3"
            />
            <img
                src="https://ephraimportfolio.vercel.app/static/media/pattern-2.a80a09f3391191f798747f4d585a26e0.svg"
                width="57"
                height="56"
                alt="Your Name"
                className="shape shape-4"
            />
            </div>}
            

            <div className="image-container">
                <img src="https://portfolio-rohit25.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsticker.ec72ab7b.png&w=256&q=95" alt="Your Name" className="profile-image" />
            </div>
            <div className="description">
                <h2>Hello, I'm Najmuzzama Khan.</h2>
                <p>Software Engineer with 1 year of experience, specializing as a Full Stack Web Developer, passionate about building scalable web applications 🌐.</p>
            </div>
            <div className="buttons">
                <Button
                    className="button"
                    name="Github"
                    icon={faGithub}
                    onClick={() => window.open('https://github.com/NzkFalconet', '_blank')} // Change to your GitHub profile
                    isDarkMode={isDarkMode}
                />
                <Button
                    className="button"
                    name="Linkedin"
                    icon={faLinkedin}
                    onClick={() => window.open('https://www.linkedin.com/in/shaankhan2/', '_blank')} // Change to your LinkedIn profile
                    isDarkMode={isDarkMode}
                />
                <Button
                    className="button"
                    name="Resume"
                    icon={faFileAlt}
                    onClick={handleResumeClick}
                    isDarkMode={isDarkMode}
                />
            </div>
        </section>
    );
};

export default Home;
