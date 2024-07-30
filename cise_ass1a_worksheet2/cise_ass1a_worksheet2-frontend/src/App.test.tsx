import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders initial count', () => {
  render(<App />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Increment count/i);
  fireEvent.click(buttonElement);

  await waitFor(() => {
    const updatedCountElement = screen.getByText(/Count: 1/i);
    expect(updatedCountElement).toBeInTheDocument();
  });
});
