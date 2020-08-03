import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  background: url(${backgroundImg}) no-repeat 100% center;
  max-width: 1600px;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content:center; */
  margin: 20vh 0 0 20vh;
  width: 100%;
  max-width: 700px;

  h1 {
    color: #ee1818;
    font-weight: 500;
    margin-bottom: 68px;
    font-size: 64px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  button {
    width: 455px;
    height: 70px;
    background: #c53f3f;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-top: 8px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
      background: ${shade(0.2, '#C53F3F')};
    }
  }

  form {
    max-width: 700px;
    margin-top: 44px;
  }
`;
