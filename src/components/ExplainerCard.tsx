import React from 'react';
import styled from 'styled-components';
import { Badge, styles } from '@storybook/design-system';
import { Heading } from './Heading';
import { Stack, StackProps } from './Stack';
import { Text } from './Text';
import { margin } from '../styles';
import { Measure, MeasureProps } from './Measure';
import ArrowSvg from '../images/arrow.svg';

const { breakpoint, typography } = styles;

const ComponentBadge = styled(Badge)`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.75);
`;

const ComponentBadgeGroup = styled(Stack).attrs({
  axis: 'horizontal',
  space: 10,
})<StackProps>`
  margin-top: 12px;
`;

const DescriptionContainer = styled.div`
  max-width: 440px;

  @media (min-width: ${breakpoint * 1.25}px) {
    max-width: 320px;
  }

  * {
    color: #fff;
  }

  h3 {
    font-weight: ${typography.weight.black};
  }
`;

const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  max-width: 300px;
  position: relative;

  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoint * 1.25}px) {
    margin-bottom: 0;
    margin-right: ${margin.large}px;
  }

  img {
    width: 100%;
  }
`;

const ExplainerCardContainer = styled(Measure)<MeasureProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoint * 1.25}px) {
    flex-direction: row;
  }
`;

const Arrow = styled(ArrowSvg)`
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: none;

  @media (min-width: ${breakpoint * 1.25}px) {
    display: block;
  }
`;

type ExplainerCardProps = {
  illustration: JSX.Element;
  term: string;
  definition: string;
  examples: string[];
  hideArrow?: boolean;
};

export const ExplainerCard = ({
  illustration,
  term,
  definition,
  examples,
  hideArrow,
}: ExplainerCardProps) => (
  <ExplainerCardContainer variant="wide">
    <Illustration>
      {illustration}
      {!hideArrow && <Arrow />}
    </Illustration>
    <DescriptionContainer>
      <Heading as="h3" level="4">
        {term}
      </Heading>
      <Text>{definition}</Text>
      <ComponentBadgeGroup>
        {examples.map((example) => (
          <ComponentBadge key={example}>{example}</ComponentBadge>
        ))}
      </ComponentBadgeGroup>
    </DescriptionContainer>
  </ExplainerCardContainer>
);

ExplainerCard.defaultProps = {
  hideArrow: false,
};
