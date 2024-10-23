import React from 'react';
import './Header.css'; // CSS styles for Header

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className={`header ${isDarkMode ? 'dark' : ''}`}>
            <h1>Najmuzzama Khan</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experiences</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certifications">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <button
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-pressed={isDarkMode}
            >
                {isDarkMode ? '🌙' : '🌞'}
            </button>

        </header>
    );
};

export default Header;
