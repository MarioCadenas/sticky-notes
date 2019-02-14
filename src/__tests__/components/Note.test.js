import React from 'react';
import { shallow } from 'enzyme';
import Note, { RemoveButton } from '../../components/Note';

describe('Note component', () => {
  it('should correctly render', () => {
    const wrapper = shallow(<Note text="test" removeNote={() => {}} id="1" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should correctly call remove button', () => {
    const removeNote = jest.fn();
    const noteId = 5;
    const wrapper = shallow(<Note text="test" removeNote={removeNote} id={noteId} />);
    expect(wrapper.find(RemoveButton).length).toEqual(1);
    wrapper.find(RemoveButton).simulate('click');
    expect(removeNote).toHaveBeenCalledWith(noteId);
  })
});