import React from 'react';
import styled from 'styled-components';

const PillWrapper = styled.div<{ selected: boolean }>`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 16px;
  background: #0d0d0d;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border-radius: 120px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 8px;

  ${(props) =>
    props.selected &&
    `
  background-color: #ffffff;
  color: #0d0d0d;
  `};
`;

interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}

export const Pill = ({ text, selected, onClick }: Props) => {
  return (
    <PillWrapper selected={selected} onClick={onClick}>
      {text}
    </PillWrapper>
  );
};
