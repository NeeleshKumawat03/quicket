
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import ShowPersonProfile from './ShowPersonProfile';

test('renders profile details correctly', () => {
  render(
    <Provider store={store}>
      <ShowPersonProfile />
    </Provider>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText('Neelesh')).toBeInTheDocument();
    expect(screen.getByText('Phone: 123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('Email: neelesh.doe@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    expect(screen.getByText('Facebook Profile')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument();
  }, 1000);

});
