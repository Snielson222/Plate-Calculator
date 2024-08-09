import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>My Links</p>
            <div className="footer-links">
                <a href="https://snielson222.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                <a href="https://github.com/Snielson222" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/steven-nielson-5b7a3729a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;