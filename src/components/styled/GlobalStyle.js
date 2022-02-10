import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1{
    font-family: "Catamaran";
    font-weight: bold;
    font-size: 32px;
}
`;
export default GlobalStyle;
