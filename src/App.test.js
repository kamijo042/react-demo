import { render, screen } from '@testing-library/react';
import GoogleMapApi from "./components/GoogleMapApi";

test('renders learn react link', () => {
  render(<GoogleMapApi />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
