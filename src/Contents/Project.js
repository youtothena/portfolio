import React from 'react';
import './Project.css';

const Project = () => {
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
                            <h2>TITLE : 지브리 서랍장</h2>
                            <h3>Skills : HTML5 CSS3 React(with API) Github-Pages</h3>
                            <p>
                                API 활용 방법을 습득하기 위해 연습 삼아 만든 지브리 영화 콜렉션입니다. <br />
                                사용한 API 데이터 내에 이미지가 따로 없어서, <br />
                                메인 페이지는 임의로 이미지와 타이틀을 데이터로 묶어서 사용했습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/ghibli_collection">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://youtothena.github.io/ghibli_collection/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
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
                            <h2>Title : 영화 콜렉션</h2>
                            <h3>Skills : HTML5 CSS3 React(with API) Github-Pages</h3>
                            <p>
                                cinema 정보가 포함된 API를 활용하여 <br />
                                평점 순으로 나열된 영화 소개 페이지를 만들었습니다. <br />
                                데이터를 받아오는 속도를 고려해 비동기 작업을 포함시켰습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/cinema_react">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://youtothena.github.io/cinema_react/#/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
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
                            <h2>Title : 반응형 사이트 '밀리의 서재'</h2>
                            <h3>Skills : HTML5 CSS3 JavaScript jQuery Netlify</h3>
                            <p>
                                다양한 디바이스를 고려한 반응형 페이지입니다. <br />
                                '밀리의 서재' 사이트 리뉴얼을 주제로 세부 페이지도 구현했습니다. <br />
                                카카오 로그인 API 구현은 JavaScript를 활용했습니다. <br />
                                이외 부가적인 기능은 jQuery를 사용했으며 <br />
                                배포는 Netlify를 이용했습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/responsive">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://responsive-book.netlify.app/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Pages
                                </button>
                            </a>
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
                            <h2>Title : 성우 하이텍 모바일 UI 디자인</h2>
                            <h3>Skills : HTML5 CSS3 jQuery Github Netlify</h3>
                            <p>
                                성우 하이텍 홈페이지 리뉴얼을 위해 만든 UI 디자인입니다. <br />
                                팀 프로젝트로 진행했으며, 제품 소개 부분을 맡았습니다. <br />
                                모바일 전용으로 구성되었습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/sw_hitech_mobile">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://sw-hitech-mobile.netlify.app/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
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
                            <h2>Title : 성우 하이텍 PC UI 디자인</h2>
                            <h3>Skills : HTML5 CSS3 jQuery Github Netlify</h3>
                            <p>
                                성우 하이텍 홈페이지 리뉴얼을 위해 만든 UI 디자인입니다. <br />
                                팀 프로젝트로 진행했으며, 제품 소개 부분을 맡았습니다. <br />
                                PC 전용으로 구성되었습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/sw_hitech">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://sw-hitech-pc.netlify.app/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
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
                                르라보 리뉴얼을 주제로 모바일 전용 페이지 기획서를 작성했습니다. <br />
                                디바이스의 특성, 사용자 UI/UX, 레퍼런스 등을 조사하고  <br />
                                비주얼 컨셉과 프레임 워크 등의 방향을 구성했습니다. <br />
                            </p>
                        </div>
                        <div className="btn">
                            <a target="_blank" rel="noreferrer" href="https://github.com/youtothena/Lelabo_architecture">
                                <button>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                    Git Hub
                                </button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://lelabo-architecture.netlify.app/">
                                <button>
                                <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    Page
                                </button>
                            </a>
                        </div>
                    
                </section>
            </article>
    );
};

export default Project;