import React from 'react';
import styled from 'styled-components';
import { ExperienceList } from './components/ExperienceList';
import { NavBar } from './components/NavBar';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const PageWrapper = styled.div`
  padding: 40px 24px;
  background: #000000;
  height: calc(100% - 64px);
  width: 100%;
  overflow-y: auto;
`;

export const App = () => {
  return (
    <AppWrapper>
      <NavBar />
      <PageWrapper>
        <ExperienceList />
      </PageWrapper>
    </AppWrapper>
  );
};
