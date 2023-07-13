import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

describe('Alert Component', () => {
  it('renders the alert message correctly', () => {
    const message = 'This is an alert message';
    const { getByText } = render(<Alert message={message} />);
    const alertElement = getByText(message);
    expect(alertElement).toBeInTheDocument();
  });
});
