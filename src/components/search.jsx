import "../styles/search.css";

function Search(props){
    return(

        <section className="section-search">
            <p>{props.label}</p>
            <div className="search">
                <div>

                </div>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </section>

    );
}


export default Search;