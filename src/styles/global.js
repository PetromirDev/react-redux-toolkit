import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: sans-serif;
        font-size: 1.3em;
        // background-color: #272727;
    }
    * {
        margin: 0;
        // color: #fff;
        box-sizing: border-box;
    }
    button {
        border: none;
        cursor: pointer;
    }
    input {
        border: 1px solid gray;
    }
    button, input {
        font-family: sans-serif;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.68);
    }
`;

export default GlobalStyles;