import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieInfo = () => {
    const [ movieData, setMovieData ] = useState({});
    const urlParamsValue = useParams();

    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${urlParamsValue.movieId}`,
            params: {
                api_key: "442155d35a373f14b4183a968061b386"
            }
        }).then( (details) => {
            setMovieData(details.data);
        } )
    }, [urlParamsValue.movieId] );

    const { original_title, tagline, overview, poster_path } = movieData;
    return (
       <>
        <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
                <Link to='/catalogue' className="catalogue-button">
                    Back to the catalogue
                </Link>
            </div>
            <div className="poster-image">
                {
                    poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={`Movie poster for ${original_title}`}
                        />
                    ) : null
                }
                
            </div>
        </div>
       </>
    )
}

export default MovieInfo;