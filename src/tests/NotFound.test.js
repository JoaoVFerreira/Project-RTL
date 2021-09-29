import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { NotFound } from '../components';

test('Requisito 4', () => {
  renderWithRouter(<NotFound />);

  const textNotFound = screen.getByRole('heading',
    { name: 'Page requested not found Crying emoji', level: 2 });

  expect(textNotFound).toBeInTheDocument();

  const noFoundIMG = screen
    .getByAltText('Pikachu crying because the page requested was not found');

  expect(noFoundIMG).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
