import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";


function Favorite() {
    const {favorites} = useMovieContext();
    
    if (favorites) {
        return (
            <div className="movies-grid">
                {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they will appear here.</p>
        </div>
    )
}

export default Favorite;