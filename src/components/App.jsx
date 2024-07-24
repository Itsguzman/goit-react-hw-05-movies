import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../pages/Share';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CastList = lazy(() => import('components/Cast/Cast'));
const ReviewsList = lazy(() => import('components/Reviews/Review'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<CastList />} />
                <Route path="reviews" element={<ReviewsList />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
