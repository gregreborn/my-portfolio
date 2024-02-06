import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ProjectModal from './ProjectModal';
import './ProjectCard.css'; // Import the CSS file

const ProjectCard = ({ project }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    return (
        <>
            <Card className="card-container">
                <div className="img1">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="img2" onClick={handleShow}>
                    <img src={project.circleImage} alt="Circle" />
                </div>
                <div className="main-text">
                    <h2>{project.title}</h2>
                </div>
            </Card>
            <ProjectModal
                show={modalShow}
                handleClose={handleClose}
                project={project}
            />
        </>
    );
};

export default ProjectCard;
