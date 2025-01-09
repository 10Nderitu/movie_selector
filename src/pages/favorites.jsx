import { useMovieContext } from "../contexts/movieContext"
import "../css/Favorites.css"

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
        {favorites.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
        </div>
      </div>
        )
    }
    return <div className="favorites-empty">
        <h2>There are no favorite movies</h2>
        <p>Start adding movies to your favorites!</p>
    </div>
}

export default Favorites