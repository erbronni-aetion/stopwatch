import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('App should render header', () => {
    render(<App/>);
    expect(screen.getByText('Stopwatch Demo')).toBeInTheDocument();
});