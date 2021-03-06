import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {

    background: #1E1E1E;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

`;
