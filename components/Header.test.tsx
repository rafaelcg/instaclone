import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';


test('example', () => {
  const { getByTestId } = render(
    <Header />,
  );

  expect(getByTestId('header-component').textContent).toBe('Header');
});
