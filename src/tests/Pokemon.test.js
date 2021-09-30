import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { Pokemon } from '../components';

test('Requisito 6', () => {
  const pokemon = [{
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 45',
        map: 'https://cdn2.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png',
      },
      {
        location: 'Johto Dragon\'s Den',
        map: 'https://cdn2.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png',
      },
    ],
    summary: 'They say that if it emits an aura from its whole body,'
    + 'the weather will begin to change instantly.',
  }];
  renderWithRouter(<Pokemon
    pokemon={ pokemon }
    favorite={ isPokemonFavoriteByIdType }
  />);

  const correctPokemon = screen.getByText('Dragonair');
  expect(correctPokemon).toBeInTheDocument();

  /* const { history } = renderWithRouter(<App />);

  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();
  const typeOfPokemon = screen.getAllByTestId('pokemon-type');
  expect(typeOfPokemon).toHaveLength(7);

  const textPikachu = screen.getByText(/Average weight: 6.0 kg/i);
  expect(textPikachu).toBeInTheDocument();
  const imgPikachu = screen.getByAltText(/pikachu sprite/i);
  expect(imgPikachu).toBeInTheDocument();
  expect(imgPikachu).toHaveAttribute('src',
    'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

  const detailsPikachu = screen.getByText(/more details/i);
  expect(detailsPikachu).toBeInTheDocument();

  userEvent.click(detailsPikachu);
  const textDetailsPikachu = screen.getByText(/pikachu details/i);
  expect(textDetailsPikachu).toBeInTheDocument();

  const actualURL = history.location.pathname;
  expect(actualURL).toBe('/pokemons/25'); */
});
