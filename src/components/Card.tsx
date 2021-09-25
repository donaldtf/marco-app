import React from 'react';
import styled from 'styled-components';
import { Experience } from '../types';

interface Props {
  experience: Experience;
}

const CardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

const CardImage = styled.img`
  max-width: 239px;
  @media only screen and (max-device-width: 480px) {
    max-width: 85vw;
  }
`;

const CardTitle = styled.div`
  font-family: Aktiv Grotesk Ex App;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  color: #ffffff;
  margin: 4px 0;
`;

const Hostname = styled.div`
  font-family: Aktiv Grotesk App;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

export const Card = ({ experience }: Props) => {
  const { title, img, host } = experience;

  return (
    <CardWrapper>
      <CardImage src={img} loading="lazy" />
      <CardTitle>{title}</CardTitle>
      <Hostname>{host}</Hostname>
    </CardWrapper>
  );
};
