import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { FavoritePokemons } from '../components';

test('Requisito 3', () => {
  renderWithRouter(<FavoritePokemons />);

  const textNotFound = screen.getByText('No favorite pokemon found');
  expect(textNotFound).toBeInTheDocument();
});
