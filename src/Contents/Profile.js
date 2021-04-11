import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <article className="profile_box">
                <div className="profile_image">
                    <h1>PROFILE</h1>
                    <img src="../images/selfimage.jpg" alt="본인 이미지" />
                    <h2>PARK YOU NA <span>박유나</span></h2>
                    <h3>93.01.18</h3>
                </div>
                <div className="profile_moto">
                    <h4>센스는 갈고 닦고</h4>
                    <h4>재능은 꽃피우는 것</h4>
                </div>
                <hr />
                <section className="profile">
                    <div className="profile_study">
                        <p>프랑스 스트라스부르 대학교 2학년 수료&nbsp;(2019.09 - 2020.06)</p>
                        <p>성신여자대학교 사회복지학과<span>(주전)</span> / 국어국문학과<span>(부전)</span> 졸업 &nbsp;(2012.02 - 2018.08)</p>
                        <p>영신여자고등학교 졸업&nbsp;(2008.02 - 2011.02)</p>
                    </div>
                    <div className="profile_skill">
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JAVASCRIPT</p>
                        <p>jQuery</p>
                        <p>React</p>
                        <p>Vue</p>
                        {/* <span>Photoshop</span>
                        <span>Power Point</span>
                        <span>Word</span> */}
                    </div>
                </section>
            </article>
            {/* <article className="experience_box">
                <div className="experience">
                    <p>
                        대학교 4학년이 되기 전, 약 1년간 프랑스 르아브르 지역에서 교환학생으로 지냈습니다. <br />
                        그곳에서 프랑스 문화와 언어를 배웠고 여러 친구들을 만나면서 다양한 곳을 여행 할 수 있었습니다. <br />
                        이후, 교환학생 때의 경험이 저에게 많은 영향을 주어서 대학교 졸업 이후 바로 <br />
                        프랑스 비쉬 지역으로 어학연수를 떠났습니다. 9개월동안 프랑스어를 심도있게 공부했고 <br />
                        자격증 획득 후 스트라스부르 대학교 사회학과 2학년으로 편입했습니다. <br />
                        프랑스에서의 생활을 통해 적응력과 다양성에 대한 인정, 그리고 자립할 수 있는 역량을 배울 수 있었습니다. <br />
                        대학교 시절에는 종합사회복지관에서 한 달간 실습을 다니며, 팀 프로젝트를 설계하고 진행했고 <br />
                        이를 통해 협업에 있어서 소통과 개개인의 역량을 끌어낼 수 있는 리더십의 중요성을 깨닫게 되었습니다.
                    </p>
                </div>
                <div className="language">
                    <p>English(Average)</p>
                    <p>French(Fluent)</p>
                    <p>Japanese(Little)</p>
                    <p>Korean(Native)</p>
                </div>
            </article> */}
        </>
    );
};

export default Profile;