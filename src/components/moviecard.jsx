import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';
import PropTypes from 'prop-types';


function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay"/>
                <button className= {`favorite-btn ${favorite ? "active" : ""}`}onClick={onHeartClick}> 
                    ♥
                </button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

    function onHeartClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      id: PropTypes.id
    }).isRequired,
  };

export default MovieCard;