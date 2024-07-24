import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './MoviePage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  // Add console logs for the location object
  useEffect(() => {
    console.log('Location object:', location);
  }, [location]);

  // const backLink = location.state?.from ?? '/movies';
  const movieTitleFromState = location.state?.movieTitle;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* {backLink && (
        <Link to={backLink}>
          <button>⬅ Go back</button>
        </Link>
      )} */}
      <div className={css.movieDetailsPageDiv}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />
        <div>
          <h1>{movieDetails.title}</h1>
          {movieTitleFromState && (
            <h4>Passed from state: {movieTitleFromState}</h4>
          )}
          <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.movieDetailsPageDivAdd}>
        <hr />
        <h3>Additional information</h3>
        <Link to="cast">
          <button>Cast</button>
        </Link>
        <Link to="reviews">
          <button>Reviews</button>
        </Link>
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
