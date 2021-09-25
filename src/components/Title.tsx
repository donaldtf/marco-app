import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Aktiv Grotesk Ex App;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 110%;
  color: #ffffff;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
`;

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
