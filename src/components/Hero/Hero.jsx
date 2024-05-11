import React from 'react'
import './Hero.css' 
import profile_img from '../../assets/profile_pic.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Jason,</span> CS student in CSUF.</h1>
            <p>I am a senior cs student in CSUF and also a back-end developer in a startup company, Picgent, which dedicates in AI image searching.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero