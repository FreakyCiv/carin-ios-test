/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('renders correctly', () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | undefined;

    ReactTestRenderer.act(() => {
      rendered = ReactTestRenderer.create(<App />);
    });

    expect(rendered).toBeTruthy();
    rendered!.unmount();
  });

  test('shows splash screen briefly then hides it', () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | undefined;

    ReactTestRenderer.act(() => {
      rendered = ReactTestRenderer.create(<App />);
    });

    expect(rendered!.root.findByProps({testID: 'splash-screen'})).toBeTruthy();

    ReactTestRenderer.act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(rendered!.root.findAllByProps({testID: 'splash-screen'})).toHaveLength(0);
    rendered!.unmount();
  });
});
