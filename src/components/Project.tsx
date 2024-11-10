import React from 'react';
import "../css-files/project.css"
import Link from 'next/link';
import Image from 'next/image';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project: React.FC = () => {
    const projects = [
        {
            title: "Clothing Website",
            description: "A responsive clothing website built with HTML CSS and JavaScript",
            image: "/images/cloth.webp", // Replace with your image URL
         
        },
        {
            title: "Ice Cream Website",
            description: "An ice cream store built with Nextjs with tailwindcss",
            image: "/images/ice.jpg", // Replace with your image URL
       
        },
        {
            title: "My Portfolio",
            description: "A portfolio website built with Next.js and Tailwind CSS",
            image: "/images/port.jpg", // Replace with your image URL
          
        },
        {
            title: "Resume Builder",
            description: "A resume builder build with html css and javascript",
            image: "/images/resume.webp", // Replace with your image URL
        
        },
        {
            title: "Blog App",
            description: "A blog app built with Nextjs and Tailwindcss",
            image: "/images/blog.jpg", // Replace with your image URL
       
        },
        {
            title: "Teacher Day Card",
            description: "A card build with nextjs ",
            image: "/images/app.png", // Replace with your image URL
        
        }
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <Image src={project.image} alt={project.title} width={100} height={100} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
