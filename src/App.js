import React, { Component } from 'react';
import Note from './components/Note';
import Form from './components/Form';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const AppContainer = styled.div`
  text-align: center;
`
const Notes = styled.div`
  display: inline-block;
  height: auto;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({ notes: this.loadStorage() });
  }

  loadStorage = () => JSON.parse(localStorage.getItem('notes')) || [];

  updateStorage = (notes) => localStorage.setItem('notes', JSON.stringify(notes, null, 2));

  addNote = (note) => {
    this.setState(({ notes: oldNotes }) => {
      const notes = [...oldNotes, note];
      this.updateStorage(notes);
      return { notes };
    });
  }

  removeNote = (noteId) => {
    this.setState(({ notes: oldNotes }) => {
      const notes = oldNotes.filter((note, i) => i !== noteId);
      this.updateStorage(notes);
      return { notes };
    });
  }

  render() {
    const { addNote, removeNote, state: { notes } } = this;

    return (
      <AppContainer>
        <GlobalReset />
        <Notes>
          {
            notes.length ? (
              notes.map((note, index) => <Note key={index} removeNote={removeNote} {...note} id={index} />)
            ) : (
              <p>No notes to display.</p>
            )
          }
        </Notes>
        <Form addNote={addNote} />
      </AppContainer>
    );
  }
}

export default App;
