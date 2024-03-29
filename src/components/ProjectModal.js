import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import './ProjectModal.css';

const ProjectModal = ({ show, handleClose, project }) => {
    const hasImages = project.images && project.images.length > 0;

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {hasImages ? (
                    <Carousel>
                        {project.images.map((imgUrl, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={imgUrl}
                                    alt={`Slide ${index + 1}`}
                                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : null}
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
