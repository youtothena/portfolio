import React from 'react';
import './Project.css';
import { useTranslation } from 'react-i18next'


const Project = () => {
    const { t, i18n } = useTranslation()

    const changelanguageToKo = () => i18n.changeLanguage('ko')
    const changelanguageToEn = () => i18n.changeLanguage('en')
    const changelanguageToFr = () => i18n.changeLanguage('fr')

    return (
            <article className="container_box">
                <section className="project">
                    <div className="project_title">
                        <h2>Project 01</h2>
                    </div>
                    <div className="project_img">
                        <img src="../images/ghibli.png" alt="지브리 프로젝트 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>TITLE : {t('title1')}</h2>
                            <h3>Skills : HTML5 CSS3 React(with API) Github-Pages</h3>
                            <p>
                            {t('description1_1')} <br />
                            {t('description1_2')} <br />
                            {t('description1_3')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/ghibli_collection">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://youtothena.github.io/ghibli_collection/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                            <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                            <button onClick={changelanguageToEn} class="lang_btn">English</button>
                            <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                </section>
                <section className="project">
                    <div className="project_title">
                        <h2>Project 02</h2>       
                    </div>
                    <div className="project_img">
                        <img src="../images/cinema.png" alt="시네마 프로젝트 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>Title : {t('title2')}</h2>
                            <h3>Skills : HTML5 CSS3 React(with API) Github-Pages</h3>
                            <p>
                            {t('description2_1')} <br />
                            {t('description2_2')} <br />
                            {t('description2_3')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/cinema_react">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://youtothena.github.io/cinema_react/#/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                                <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                                <button onClick={changelanguageToEn} class="lang_btn">English</button>
                                <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                </section>
                <section className="project">
                    <div className="project_title">
                        <h2>Project 03</h2>       
                    </div>
                    <div className="project_img">
                        <img src="../images/responsive.png" alt="반응형 사이트 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>Title : {t('title3')}</h2>
                            <h3>Skills : HTML5 CSS3 JavaScript jQuery Netlify</h3>
                            <p>
                            {t('description3_1')} <br />
                            {t('description3_2')} <br />
                            {t('description3_3')} <br />
                            {t('description3_4')} <br />
                            {t('description3_5')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/responsive">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://responsive-book.netlify.app/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Pages
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                                <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                                <button onClick={changelanguageToEn} class="lang_btn">English</button>
                                <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                </section>
                <section className="project">
                    <div className="project_title">
                        <h2>Project 04</h2>       
                    </div>
                    <div className="project_img">
                        <img src="../images/sungwoo_mobile.png" alt="성우 하이텍 모바일 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>Title : {t('title4')}</h2>
                            <h3>Skills : HTML5 CSS3 jQuery Github Netlify</h3>
                            <p>
                            {t('description4_1')} <br />
                            {t('description4_2')} <br />
                            {t('description4_3')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/sw_hitech_mobile">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://sw-hitech-mobile.netlify.app/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                                <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                                <button onClick={changelanguageToEn} class="lang_btn">English</button>
                                <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                </section>
                <section className="project">
                    <div className="project_title">
                        <h2>Project 05</h2>       
                    </div>
                    <div className="project_img">
                        <img src="../images/sungwoo_pc.jpg" alt="성우 하이텍 pc 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>Title : {t('title5')}</h2>
                            <h3>Skills : HTML5 CSS3 jQuery Github Netlify</h3>
                            <p>
                            {t('description5_1')} <br />
                            {t('description5_2')} <br />
                            {t('description5_3')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/sw_hitech">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://sw-hitech-pc.netlify.app/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                                <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                                <button onClick={changelanguageToEn} class="lang_btn">English</button>
                                <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                   
                </section>
                <section className="project">
                    <div className="project_title">
                        <h2>Project 06</h2>       
                    </div>
                    <div className="project_img">
                        <img src="../images/architecture.png" alt="르라보 아키텍처 이미지"></img>
                    </div>
                        <div className="project_text">
                            <h2>Title : 르라보 아키텍처 기획서</h2>
                            <h3>Skills : PowerPoint </h3>
                            <p>
                            {t('description6_1')} <br />
                            {t('description6_2')} <br />
                            {t('description6_3')} <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/Lelabo_architecture">
                                <button className="link_btn">
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://lelabo-architecture.netlify.app/">
                                <button className="link_btn">
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                        <div className="lang_btn_box">
                                <button onClick={changelanguageToKo} class="lang_btn">Korean</button>
                                <button onClick={changelanguageToEn} class="lang_btn">English</button>
                                <button onClick={changelanguageToFr} class="lang_btn">French</button>
                        </div>
                    
                </section>
            </article>
    );
};

export default Project;