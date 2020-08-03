import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 455px;
  height: 56px;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    color: #666360;
    border: 0;
    border-radius: 5px;
    padding: 0 20px;

    &::placeholder {
      color: #666360;
    }
  }
`;
