import React from 'react';
import { shallow } from 'enzyme';
import Note from '../../components/Note';

describe('Note component', () => {
  it('should correctly render', () => {
    const wrapper = shallow(<Note text="test" removeNote={() => {}} id="1" />);
    expect(wrapper).toMatchSnapshot();
  });
});