import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({ className, name, icon, onClick, isDarkMode }) => {
    // Determine the additional class based on the button name
    const buttonStyle = {
        Github: 'button-white',
        Linkedin: 'button-skyblue',
        Resume: 'button-transparent'
    };

    return (
        <button
            className={`button ${className} ${buttonStyle[name]} ${isDarkMode ? 'dark' : ''}`}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />} {/* FontAwesome icon */}
            <span className="button-text">{name}</span> {/* Separate text styling */}
        </button>
    );
};

export default Button;
