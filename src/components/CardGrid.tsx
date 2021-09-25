import { ChevronRight24 } from '@carbon/icons-react';
import React from 'react';
import styled from 'styled-components';
import { Category } from '../types';
import { Card } from './Card';

const CategoryTitle = styled.div`
  font-family: Aktiv Grotesk Ex App;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 24px;
  justify-content: space-between;
  cursor: pointer;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-right: 24px;

  div:last-child {
    flex: auto;
  }
`;

const GridItem = styled.div`
  flex: 1;
  margin-bottom: 32px;
  margin-right: 24px;
`;

interface Props {
  category: Category;
  onTitleClick: () => void;
}

export const CardGrid = ({ category, onTitleClick }: Props) => {
  const { items, title } = category;
  return (
    <div>
      <CategoryTitle onClick={onTitleClick}>
        {title} <ChevronRight24 />
      </CategoryTitle>
      <Grid>
        {items.map((experience) => (
          <GridItem>
            <Card experience={experience} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
