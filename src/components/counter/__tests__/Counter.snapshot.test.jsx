import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

describe('Counter snapshot tests', () => {
  it('render counter with default count', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('render counter with 5', () => {
    const tree = renderer.create(<Counter count={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})