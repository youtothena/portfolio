import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id="container">
            <section className="header">
                <div className="header_logo">
                    <img src="../images/logo.png" alt="로고 이미지"/>
                </div>
                <div className="header_title">
                    <h1>PORTFOLIO</h1>
                </div>
            </section>
                <div className="header_content">
                    <h4>Front-end</h4>
                    <h4>Developer</h4>
                </div>
            
        </div>
    );
};

export default Header;