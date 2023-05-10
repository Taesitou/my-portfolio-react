import "../styles/trajectory.css";


function Trajectory(props){
    return(
        <div className="trajectory-info">
            <h3>{props.place}</h3>
            <p>{props.date}</p>
            <p className="trajectory-label">{props.label}</p>
        </div>
    );
}

export default Trajectory;