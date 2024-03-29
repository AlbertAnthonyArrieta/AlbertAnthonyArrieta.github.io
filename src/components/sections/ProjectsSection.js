import { Container } from "react-bootstrap";
import { ProjectCard } from "../common/ProjectCard";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useState } from "react";
import PortfolioPic from '../../images/portfolioPic.png';
import PortfolioPic2 from '../../images/beforeaftportfolio-3.jpg';
import PortfolioPic3 from '../../images/beforeaftportfolio-4.jpg';
import RiddlerPic from '../../images/riddlerPic.png';
import RiddlerPic2 from '../../images/riddlerPic2.png';
import RiddlerPic3 from '../../images/riddlerPic3.png';
import AlbronPic1 from '../../images/AlbronPic1.png';
import AlbronPic2 from '../../images/AlbronPic2.png';
import AlbronPic3 from '../../images/AlbronPic3.png';
import AlbronPic4 from '../../images/AlbronPic4.png';
import CarsPic from '../../images/carsPic.png';
import CarsPic2 from '../../images/cars2.jpg';
import CarsPic3 from '../../images/cars3.jpg';
import SpiritPic from '../../images/spiritPic.png';
import ThresholdPic from '../../images/imageseg-2.jpg';
import ThresholdPic2 from '../../images/imageseg-1.jpg';
import TicPic from '../../images/ticPic.png';
import InfinityPic from '../../images/infinityPic.png';
import InfinityPic2 from '../../images/infinityPic2.png';
import InfinityPic3 from '../../images/infinityPic3.png';
import ReelWinderPic1 from '../../images/ReelWinder1.png';
import ReelWinderPic2 from '../../images/ReelWinder2.png';
import ReelWinderPic3 from '../../images/ReelWinder3.png';
import JerichoPic1 from '../../images/jerichopic1.png';

const projects = [
    {
        name: "Albron DGS Inc Website",
        type: "Web App",
        description: "A commercial Website created for Design and Drafting company AlbronDGS Inc, built on the React framework.",
        imgs: [AlbronPic1, AlbronPic2, AlbronPic3, AlbronPic4],
        link: 'https://albrondgsinc.com/',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        summary: "Built with React, this website serves as a commercial platform for Albron DGS Inc. Its primary objective is to exhibit the company's comprehensive range of services and highlight their diverse portfolio of completed projects."
    },
    {
        name: "CARS Volunteer Management System",
        type: "Web App",
        description: "A volunteer management system created for the non-profit organization Calgary Animal Rescue Society (CARS).",
        imgs: [CarsPic, CarsPic2, CarsPic3],
        github: 'https://github.com/IvanOkh/Volunteer-Management-System-Frontend',
        tags: ['AngularJS', 'TypeScript', 'HTML', 'CSS'],
        summary: 'A volunteer management system created for the non-profit organization Calgary Animal Rescue Society (CARS). The system aims to provide CARS administrators with the ability to oversee and organize various aspects, including volunteer information, foster information, volunteer applications, foster applications, and event management, with registration options for active volunteers. Initially conceived as a capstone project for SAIT, this initiative has evolved into a comprehensive solution.'

    },
    {
        name: "Tic Tac Toe AI",
        type: "Desktop App",
        description: "A Java application with an unbeatable AI using the MinMax Algorithm.",
        imgs: [TicPic],
        tags: ['Java', 'AI'],
        summary: 'Engage in an intense game of Tic Tac Toe against an AI opponent that utilizes the MiniMax algorithm.',
        github: 'https://github.com/AlbertAnthonyArrieta/TicTacToeAI'
    },
    {
        name: "Reel Winder",
        type: "Web App",
        description: "A Web Application that turns the OMDB API into a mini trivia game.",
        imgs: [ReelWinderPic1, ReelWinderPic2, ReelWinderPic3],
        tags: ['JQuery', 'JavaScript', 'HTML', 'CSS' ],
        summary: "This website uses a RESTful API from https://www.omdbapi.com. This project retrieves movie information from omdbapi and uses it for a guessing game. In this game, the user is presented with a random movie along with details such as the release year, director, genre, and a short list of actors. The user's objective is to guess the correct movie using the provided information and attempt to maintain a winning streak without making an incorrect guess. The ultimate goal of the game is to achieve the longest winning streak possible.",
        github: 'https://github.com/AlbertAnthonyArrieta/ReelWinder',
        link: "https://albertarrieta.dev/ReelWinder/",
    },
    {
        name: "Image Thresholding",
        type: "Desktop App",
        description: "A Java application that processes several image thresholding algorithms for black and white images.",
        imgs: [ThresholdPic, ThresholdPic2],
        tags: ['Java', 'Image Processing'],
        summary: 'This Java application performs image processing using two distinct Image Thresholding algorithms: Mean Thresholding and Histogram Thresholding. By selecting an image and applying the preferred algorithm, the application generates a new image where contrasting colors are separated into either black or white tones.',
        github: 'https://github.com/AlbertAnthonyArrieta/ImageThresholding'
    },
    {
        name: "Jericho Health Website",
        type: "Web App",
        description: "Website made for Jericho Health Integrated Clinic, built with WordPress and Elementor.",
        imgs: [JerichoPic1],
        tags: ['WordPress', 'JavaScript', 'HTML', 'CSS'],
        summary: "This website was created for Jericho Health Integrated Clinic, a health clinic located in Vancouver, British Columbia. The website was built using WordPress and Elementor. The website was designed to showcase the clinic's services and provide information about the clinic's practitioners and staff. The website also includes a blog section where the clinic can post articles about health and wellness.",
        link: "https://jerichohealth.ca/",
    },
    {
        name: "The Infinity Stones",
        type: "Web App",
        description: "A mini website that explains the journey of the Infinity Stones in the Marvel Cinematic Universe.",
        imgs: [InfinityPic, InfinityPic2, InfinityPic3],
        tags: ['JQuery', 'JavaScript', 'HTML', 'CSS'],
        github: "https://github.com/AlbertAnthonyArrieta/The-Infinity-Stones",
        link: "https://www.albertarrieta.dev/The-Infinity-Stones/index.html",
        summary: "Explore the infinity stones on this mini website and delve into their significance in the Marvel Cinematic Universe. Gather the stones to uncover their individual powers and roles. After obtaining all the stones, unleash their combined might with a single click to witness the aftermath following Avengers: Infinity War."
    },
    {
        name: "Riddler",
        type: "Mobile App",
        description: "A small riddle game created with Framework7 for android devices.",
        imgs: [RiddlerPic, RiddlerPic2, RiddlerPic3],
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/AlbertAnthonyArrieta/Riddler-App',
        summary: "An Android game developed using Framework7, designed to entertain with a collection of challenging riddles. Embark on a journey through 10 levels of mind-bending puzzles, earning points as you successfully unravel each enigma. Accumulate these points to acquire valuable hints, which can be used to tackle upcoming riddles."
    },
    {
        name: "My Portfolio",
        type: "Web App",
        description: "This current website portfolio you are on right now! Upgraded using React.",
        imgs: [PortfolioPic, PortfolioPic2, PortfolioPic3],
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
        summary: "This project is the current website you are on right now! This website was created using React and showcases everything about myself! If you would like to get to know more about me, feel free to contact me!"
    },
    {
        name: "Spirit Detector",
        type: "Mobile App",
        description: "An android app created using Framework7 that utilizes the device's gyroscope and accelerometer.",
        imgs: [SpiritPic],
        tags: ['Framework7', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/AlbertAnthonyArrieta/Spirit-Detector',
        summary: "This Android application built on Framework7 serves as a tool for detecting 'spirits' present in your surroundings. By utilizing the device's orientation, the app detects these entities. Each time the spirit detector is turned on, the app generates random X and Z angles. As you approach the designated X and Z angles, the signal strength of the tool intensifies, indicating the proximity to the detected spirits."
    },
]


export const ProjectsSection = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((project) => {
        if (filter === "All") {
            return true;
        } else if (filter === "Web Apps") {
            return project.type === "Web App";
        } else if (filter === "Desktop Apps") {
            return project.type === "Desktop App";
        } else if (filter === "Mobile Apps") {
            return project.type === "Mobile App";
        } else {
            return true;
        }
    });

    return (
        <div id="projects" className="section projects">
            <Container>
                <Fade top>
                    <h1 className="section--title">PROJECTS</h1>
                </Fade>
                <div className="section--container">
                    <div className="filterBar">
                        <button className={filter === "All" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("All")}>ALL</button>
                        <button className={filter === "Web Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Web Apps")}>WEB APPS</button>
                        <button className={filter === "Desktop Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Desktop Apps")}>DESKTOP APPS</button>
                        <button className={filter === "Mobile Apps" ? "filterBar--button__active" : "filterBar--button"} onClick={() => setFilter("Mobile Apps")}>MOBILE APPS</button>
                    </div>
                    <div>
                        <div className="project--cards--container">
                            {filteredProjects.map((project) => (
                                <ProjectCard project={project} />
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default ProjectsSection