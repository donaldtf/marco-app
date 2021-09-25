import { Menu24 } from '@carbon/icons-react';
import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d0d0d;
  height: 64px;
  padding: 24px;
  border-bottom: 1px solid #ffffff26;
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu24 color="#FFF" />
    </Wrapper>
  );
};
