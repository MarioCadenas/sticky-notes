import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  height: 100px;
  width: 100%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  height: 30px;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;
const Button = styled.button`
  border: none;
  height: 50px;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showError: false
    }
  }

  handleInputChange = ({ target: { value: text } }) => this.setState({ text, showError: false });

  handleSubmit = (e) => {
    e.preventDefault();
    const { state: { text } } = this;

    if (!text) {
      return this.setState({ showError: true });
    }

    this.setState({ text: '' });
    return this.props.addNote({ text });
  }

  render() {
    const { handleSubmit, handleInputChange, state: { text, showError } } = this;

    return (
      <StyledForm onSubmit={handleSubmit}>
        {showError && <p>You must provide a text</p>}
        <Input type="text" name="note" onChange={handleInputChange} value={text} placeholder="Text for the note" />
        <Button>Add</Button>
      </StyledForm>
    )
  }
}

export default Form;
