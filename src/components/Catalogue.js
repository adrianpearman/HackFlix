// import useState and useEffect
import { useState, useEffect } from "react";
// import axios
import axios from "axios";
import { Link } from "react-router-dom";

const Catalogue = () => {
    const [ movies, setMovies ] = useState([]);
    
    useEffect( () => {
        axios({
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "442155d35a373f14b4183a968061b386",
                include_adult: false,
                primary_release_year: 1998
            }
        }).then( (allMovies) => {
            setMovies(allMovies.data.results);
        } )
    }, [] )

    return (
        <ul className="catalogue">
        {
            movies.map( (movieObj) => {
                return <li key={movieObj.id}>
                    <Link to={`/movie/${movieObj.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                            alt={`Poster for ${movieObj.original_title}`} 
                        />
                    </Link>
                </li>
            } )
        }
        </ul>
    )
}

export default Catalogue;