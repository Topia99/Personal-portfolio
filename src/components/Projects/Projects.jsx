import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import projects_data from '../../assets/projects_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="project-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="project-container">
                {projects_data.map((project,index)=>{
                    return <img key={index} src={project.p_img} alt="" />
                })}
            </div>
            <div>
                <div className="project-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects