import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/movieContext"

function MovieCard ({movie}) {
    const {isFavorite, addFavorites, removeFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    
    function onFavorite(e){
        e.preventDefault()
        if (favorite) removeFavorites(movie.id)
        else addFavorites(movie)
    }

    return <div className = "movie-card">
        <div className = "movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className = "movie-overlay">
                <button className = "favorite" onClick={onFavorite}>
                ♥
                    </button>
                    </div>
            </div>
            <div className = "movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
            /*route */
    </div>
}


export default MovieCard