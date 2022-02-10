import styled from "styled-components";
const Header = () => {
  return (
    <StyledHeader bg="red">
      <h1>Hubble</h1>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`;
export default Header;
