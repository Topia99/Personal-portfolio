import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_pic.jpg'

const About = () => {
    return (
        <div className='about'>
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
                            I am an experienced frontend Developer with over a decade of professional expertise in the field.
                            Throughout my career, I have had the privilege of collaborating with prestigious organizations,
                            contrubuting to their success and growth.
                        </p>
                        <p>My passion for frontend development is not only</p>
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
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About