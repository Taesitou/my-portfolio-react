import "../styles/about-me.css";
import Trajectory from "./trajectory";

function AboutMe(props){
    return (
        <section className="section-about-me">
            <div className="img-left">
                <img src={props.img} alt="placeholder" />
            </div>
            <div className="information">
                <div className="biography">
                    <p>
                        {props.bio}
                    </p>
                </div>
                <hr />
                <div className="trajectory">
                    {/* <h2>My Trajectory</h2> */}
                    <Trajectory place="EducacionIT" date="December 2020 - November 2021" label="Python and Web Development"/>
                    <Trajectory place="Catholic University Of Argentina" date="February 2022 - Currently" label="Computer Engineering"/>
                    <Trajectory place="Microsoft Learn Student Ambassador" date="January 2023 - Currently" label="IT"/>
                </div>
            </div>
        </section>
    );
    }

export default AboutMe;