import Container from "./components/styled/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/GlobalStyle";
import { saveAs } from "file-saver";

const theme = {
  colors: {
    header: "red",
    text: "blue",
  },
};

function App() {
  const downloadImage = () => {
    console.log("entered download space");
    saveAs(
      "https://imgd.aeplcdn.com/1200x900/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=85",
      "image.jpg"
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header></Header>
        <Container>
          <h1>Hello World</h1>
        </Container>
        <button onClick={downloadImage}>Download</button>
      </>
    </ThemeProvider>
  );
}

export default App;
