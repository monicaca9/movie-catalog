/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable */

import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
 
describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovieIdb.deleteMovie(movie.id);
    });
  });
 
  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});