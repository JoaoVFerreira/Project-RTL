import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

test('Requisito 5', () => {
  const { history } = renderWithRouter(<App />);

  const textEncontered = screen
    .getByRole('heading', { name: 'Encountered pokémons', level: 2 });
  expect(textEncontered).toBeInTheDocument();

  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();

  const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
  expect(nextButton).toBeInTheDocument();

  userEvent.click(nextButton);

  const charmander = screen.getByText(/charmander/i);
  expect(charmander).toBeInTheDocument();

  const allButton = screen.getByRole('button', { name: /all/i });
  expect(allButton).toBeInTheDocument();

  const eletricButton = screen.getByRole('button', { name: /electric/i });
  expect(eletricButton).toBeInTheDocument();

  userEvent.click(eletricButton);
  expect(pikachu).toBeInTheDocument();

  const fireButton = screen.getByRole('button', { name: /fire/i });
  expect(fireButton).toBeInTheDocument();

  userEvent.click(fireButton);
  expect(charmander).toBeInTheDocument();

  const bugButton = screen.getByRole('button', { name: /bug/i });
  expect(bugButton).toBeInTheDocument();

  userEvent.click(bugButton);
  expect(screen.getByText('Caterpie')).toBeInTheDocument();

  const poisonButton = screen.getByRole('button', { name: /poison/i });
  expect(poisonButton).toBeInTheDocument();

  userEvent.click(poisonButton);
  expect(screen.getByText('Ekans')).toBeInTheDocument();

  const psychicButton = screen.getByRole('button', { name: /psychic/i });
  expect(psychicButton).toBeInTheDocument();

  userEvent.click(psychicButton);
  expect(screen.getByText('Alakazam')).toBeInTheDocument();

  const normalButton = screen.getByRole('button', { name: /normal/i });
  expect(normalButton).toBeInTheDocument();

  userEvent.click(normalButton);
  expect(screen.getByText('Snorlax')).toBeInTheDocument();

  const dragonButton = screen.getByRole('button', { name: /dragon/i });
  expect(dragonButton).toBeInTheDocument();

  userEvent.click(dragonButton);
  expect(screen.getByText('Dragonair')).toBeInTheDocument();

  history.push('/');
  userEvent.click(allButton);

  const numberOfTypesButtons = 7;

  const x = screen.getAllByTestId('pokemon-type-button');
  expect(x).toHaveLength(numberOfTypesButtons);
});
