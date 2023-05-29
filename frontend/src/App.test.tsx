import { render } from '@testing-library/react';
import App from './App';

describe('[app]页面渲染', () => {
  test('[#1 - app]渲染正常', () => {
    const { container } = render(<App />);
    expect(container.firstElementChild).toBeTruthy();
    const carouselCardElement = container.querySelector('.carousel-card');
    expect(carouselCardElement).toBeInTheDocument();
  });
});
