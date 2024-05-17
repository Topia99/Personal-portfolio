import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_pic.jpg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="profile_img" src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I'm a senior student at California State University, Fullerton (CSUF), set to graduate in the fall of 2024.
                            My ambition is to become a full-stack developer, and I have dedicated myself to this goal by completing numerous
                            individual projects. Through these projects, I've gained hands-on experience in both front-end and back-end development,
                            and I'm eager to bring my skills and passion to professional setting. 
                        </p>
                        <p>I am also the backend engineer at a small startup company named Picgent. We are currently working on a project
                            to build an IOS mobile app that helps people search for specific photos in their photo library using text
                            descriptions. My job including construct the database and back-end framework. Our project is currently in the test
                            flight stage and will launch in June 2024.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}></hr></div>
                        <div className="about-skill"><p>Python & Django</p><hr style={{width: "70%"}}></hr></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}></hr></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}}></hr></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>HAPPY PROFESSORS</p>
                </div>
            </div>
        </div>
    )
}

export default About