import React from 'react';
import { shallow } from 'enzyme';
import Form, { StyledForm } from '../../components/Form';

describe('Form component', () => {
  it('should correctly render Form component', () => {
    const wrapper = shallow(<Form addNote={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should correctly call addNote if text is not empty', () => {
    const addNote = jest.fn();
    const text = { text: 'test' };
    const wrapper = shallow(<Form addNote={addNote}/>);
    wrapper.setState(text);
    expect(wrapper.find(StyledForm).length).toEqual(1);
    wrapper.find(StyledForm).simulate('submit', { preventDefault: () => {}});
    expect(addNote).toHaveBeenCalledWith(text);
  });
  it('should Not call addNote if text is empty', () => {
    const addNote = jest.fn();
    const wrapper = shallow(<Form addNote={addNote}/>);
    wrapper.setState({ text: '' });
    expect(wrapper.find(StyledForm).length).toEqual(1);
    wrapper.find(StyledForm).simulate('submit', { preventDefault: () => {}});
    expect(addNote).not.toHaveBeenCalled();
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('You must provide a text');
  });
});