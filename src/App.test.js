import { render, screen } from '@testing-library/react';
import App from './App';

// ici faire un test basique pour three js https://threejs.org/docs/#manual/en/buildTools/Testing-with-NPM
test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText("home");
  // expect(linkElement).toBeInTheDocument();
});
