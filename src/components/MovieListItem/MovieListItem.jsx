import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieListItem = ({ id, title, moviepath }) => {
  const location = useLocation();

  if (!moviepath) {
    return null;
  }

  return (
    <li key={id}>
      <Link
        to={`/movies/${id}`}
        state={{
          from: location,
          movieTitle: 'Random string that i want to pass',
        }}
      >
        <img
          width="260"
          height="330"
          src={`https://image.tmdb.org/t/p/w500${moviepath}`}
          alt={title}
        />
        <h4>{title}</h4>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  moviepath: PropTypes.string,
};
