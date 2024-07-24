import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieListItem = ({ id, title, moviepath }) => {
  const location = useLocation();

  // Check if the movie has an image, if not, do not render the component
  if (!moviepath) {
    return null; // Skip rendering if no image path is provided
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
  moviepath: PropTypes.string, // Include PropType for moviepath
};
