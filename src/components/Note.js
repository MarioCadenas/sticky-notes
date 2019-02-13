import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background-color: yellow;
  display: block;
  float: left;
  margin: 20px;
  min-height: 150px;
  width: 200px;
`;
const ButtonContainer = styled.div`
  background-color: #f3f30c;
  height: 20px;
  width: 100%;
`;
const TextContainer = styled.div`
  word-wrap: break-word;
  width: 100%;
`;
const RemoveButton = styled.button`
  background-color: #f3f30c;
  border: none;
  cursor: pointer;
  float: right;
`;
const Text = styled.p`
  padding: 20px;
`;

const Note = ({ text, removeNote, id }) => {
  const handleRemove = () => removeNote(id);

  return (
    <ContainerDiv>
      <ButtonContainer>
        <RemoveButton onClick={handleRemove}>X</RemoveButton>
      </ButtonContainer>
      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>
    </ContainerDiv>
  );
};

export default Note;
