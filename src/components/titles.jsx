import "../styles/titles.css";

function Titles(props) {
    return (
        <div className="titles-container">
            <span className="label">{props.label}</span>
            <h1 className="titles">{props.title}</h1>
            <hr />
        </div>
    );
    }

export default Titles;