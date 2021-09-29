import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

test('Requisito 1', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });
  expect(linkHome).toBeInTheDocument();

  const linkAbout = screen.getByRole('link', { name: /about/i });
  expect(linkAbout).toBeInTheDocument();

  const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
  expect(linkFavorite).toBeInTheDocument();

  userEvent.click(linkHome);
  const homePath = history.location.pathname;
  expect(homePath).toBe('/');

  userEvent.click(linkAbout);
  const aboutPath = history.location.pathname;
  expect(aboutPath).toBe('/about');

  userEvent.click(linkFavorite);
  const favoritePath = history.location.pathname;
  expect(favoritePath).toBe('/favorites');

  history.push('/pagina-inexistente-xablau');
  const textNotFound = screen.getByText('Page requested not found');
  expect(textNotFound).toBeInTheDocument();
});
