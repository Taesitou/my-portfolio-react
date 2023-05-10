import "../styles/project-card.css";

function ProjectCard(props){
    return(
        <div className="project-card">
            <div className="project-card__image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="project-card__content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;


