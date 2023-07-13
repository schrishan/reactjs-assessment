import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders the initial count as 0', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText(/0/i);
    expect(countElement).toBeInTheDocument();
  });

  it('increases the count when the Increase button is clicked', () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText('Increase');
    const countElement = getByText(/Count:/i);

    fireEvent.click(increaseButton);

    expect(countElement.textContent).toMatch(/Count: 1/i);
  });

  it('decreases the count when the Decrease button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decreaseButton = getByText('Decrease');
    const countElement = getByText(/Count:/i);

    fireEvent.click(decreaseButton);

    expect(countElement.textContent).toMatch(/Count: 0/i);
  });

  it("displays the alert message when the count exceeds the limit", () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText('Increase');

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    const alertElement = getByText("Count can't be more than 10");
    expect(alertElement).toBeInTheDocument();
  });

  it("displays the alert message when the count goes below 0", () => {
    const { getByText } = render(<Counter />);
    const decreaseButton = getByText('Decrease');

    fireEvent.click(decreaseButton);

    const alertElement = getByText("Count can't be less than 0");
    expect(alertElement).toBeInTheDocument();
  });

  it('resets the count when the Reset button is clicked', () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText('Increase');
    const resetButton = getByText('Reset');
    const countElement = getByText(/Count:/i);

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(resetButton);

    expect(countElement.textContent).toMatch(/Count: 0/i);
  });
});
