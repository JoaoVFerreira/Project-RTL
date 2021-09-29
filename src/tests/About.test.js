import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { About } from '../components';

test('Requisito 2', () => {
  renderWithRouter(<About />);

  const titlePokedex = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
  expect(titlePokedex).toBeInTheDocument();

  const paragrafoPokedex1 = screen.getByText(/This application simulates a Pokédex/i);
  expect(paragrafoPokedex1).toBeInTheDocument();

  const paragrafoPokedex2 = screen.getByText(/One can filter Pokémons by type/i);
  expect(paragrafoPokedex2).toBeInTheDocument();

  const especificIMG = screen.getByAltText('Pokédex');
  expect(especificIMG).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
