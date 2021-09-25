import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { CategoryData } from '../types';
import { CardGrid } from './CardGrid';
import { Pill } from './Pill';
import { Title } from './Title';

const API_URL = 'https://app.marcoexperiences.com/api/experiences/explore_test';

const Body = styled.div`
  height: 100%;
  width: 100%;
`;

const Pills = styled.div`
  margin-top: 48px;
  margin-bottom: 76px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardGridWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ExperienceList = () => {
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);

  const { isLoading, error, data } = useQuery<CategoryData>(
    'categories',
    async () => {
      const data = await (await fetch(API_URL)).json();

      return data;
    },
  );

  useEffect(() => {
    if (data) {
      const options = data.categories.map((category) => category.title);
      setCategoryOptions(options);
    }
  }, [data]);

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  const { categories } = data;

  const filteredCategories = categories.filter(({ title }) =>
    selectedCategory ? title === selectedCategory : true,
  );

  return (
    <Body>
      <Title>Explore Experiences</Title>
      <Pills>
        {categoryOptions.map((text) => (
          <Pill
            key={text}
            text={text}
            selected={text === selectedCategory}
            onClick={() => onSelectCategory(text)}
          />
        ))}
      </Pills>
      {filteredCategories.map((category) => (
        <CardGridWrapper>
          <CardGrid
            onTitleClick={() => onSelectCategory(category.title)}
            category={category}
          />
        </CardGridWrapper>
      ))}
    </Body>
  );
};
