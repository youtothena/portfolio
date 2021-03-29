import React from 'react';
import './Contents.css';

const Contact = () => {
    return (
        <div className="wrap_box">
            <article className="contact_box">
                <h2>Contact Me</h2>
                <hr className="bold_line"/>
                <section className="contact_text">
                    <div className="text_email">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <h3>Email : </h3>
                        <a target="_blank" rel="noreferrer" href="mailto:mini0193@naver.com">
                            <button>mini0193@naver.com</button>
                        </a>
                    </div>
                    {/* <hr className="thin_line"/> */}
                    <div className="text_tel">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <h3>Tel : </h3>
                        <p>010 5475 4504</p>
                    </div>
                    {/* <hr className="thin_line"/> */}
                    <div className="text_address">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <h3>Address : </h3>
                        <p>서울특별시 노원구 덕릉로84길 7</p>
                    </div>
                    {/* <hr className="thin_line"/> */}
                </section>
                <div className="logo">
                    <img src="../images/logo.png" alt="로고 이미지"/>
                </div>
            </article>
        </div>
    );
};

export default Contact;