import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

test('Requisito 7', () => {
  renderWithRouter(<App />);

  const moreDetails = screen.getByText(/more details/i);
  expect(moreDetails).toBeInTheDocument();
  userEvent.click(moreDetails);

  const pikachu = screen.getByText(/pikachu details/i);
  expect(pikachu).toBeInTheDocument();
  expect(moreDetails).not.toBeInTheDocument();

  const resumoPokemon = screen.getByRole('heading', { name: /summary/i, level: 2 });
  expect(resumoPokemon).toBeInTheDocument();

  const pokemonP = screen.getByText(/hard berries with electricity/i, { selector: 'p' });
  expect(pokemonP).toBeInTheDocument();

  const locationPikachu = screen
    .getByRole('heading', { name: /Game Locations of Pikachu/i, level: 2 });
  expect(locationPikachu).toBeInTheDocument();

  const location1 = screen.getByText(/Kanto Viridian Forest/i);
  const location2 = screen.getByText(/Kanto Power Plant/i);
  expect(location1).toBeInTheDocument();
  expect(location2).toBeInTheDocument();

  const altPokemon = screen.getAllByAltText(/pikachu location/i);
  expect(altPokemon).toHaveLength(2);

  expect(altPokemon[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(altPokemon[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');

  const checkboxFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  expect(checkboxFavorite).toBeInTheDocument();

  userEvent.click(checkboxFavorite);
  const favoritesPokemons = screen.getByText(/Favorite Pokémons/i);
  userEvent.click(favoritesPokemons);
  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

  userEvent.click(moreDetails);
  userEvent.click(checkboxFavorite);
  userEvent.click(favoritesPokemons);
  expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
});
