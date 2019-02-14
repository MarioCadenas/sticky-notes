import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

window.localStorage = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {}
    }
  };
})();

describe('App component', () => {
  describe('App with notes in localStorage', () => {
    it('should correctly render with notes', () => {
      const note = { text: 'test' };
      window.localStorage.setItem('notes', JSON.stringify([note]));
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should correctly load notes from localStorage', () => {
      const note = { text: 'test' };
      window.localStorage.setItem('notes', JSON.stringify([note]));
      const wrapper = shallow(<App />);
      expect(wrapper.state('notes')).toEqual([note]);
    });
    it('should not render message about empty notes', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('p').length).toEqual(0);
    });
  });
  describe('App with empty notes', () => {
    beforeAll(() => {
      localStorage.clear();
    });
    it('should correctly render with empty notes', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should have empty notes array if localStorage is empty', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('notes')).toEqual([]);
    });
    it('should render message about empty notes', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('p').length).toEqual(1);
      expect(wrapper.find('p').text()).toBe('No notes to display.');
    });
  });
});