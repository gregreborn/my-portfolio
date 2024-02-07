import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ProjectModal.css'; 

const ProjectModal = ({ show, handleClose, project }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{project.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" href={project.repo} target="_blank">
                    View on GitHub
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;