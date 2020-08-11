import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
`;

const HeaderParagraph = styled.p`
  color: white;
  background-color: grey;
  margin: 0px;
  padding: 10px 0px;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderParagraph>DAO - Front-end developer test task by Stelmakh Bohdan</HeaderParagraph>
  </HeaderContainer>
);

export default Header;
