
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  sourceLink?: string;
}

const ProjectCard = ({ title, description, imageUrl, liveLink, sourceLink }: ProjectCardProps) => {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <p className="mb-4">{description}</p>
          </div>
          {liveLink && (
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={liveLink}
            >
              See Live
            </a>
          )}
          {sourceLink && (
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn text-color-main"
              href={sourceLink}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href={liveLink} target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              className="thumbnail rounded js-tilt"
            >
              <img
                alt="Project"
                className="img-fluid"
                src={imageUrl}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
