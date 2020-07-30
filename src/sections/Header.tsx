import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Navbar } from '../components/Navbar';
import { Backdrop } from '../components/Backdrop';
import { Heading } from '../components/Heading';
import { ComponentDrivenIllustration } from '../components/ComponentDrivenIllustration';
import { measure } from '../styles';
import { Stack, StackProps } from '../components/Stack';

const { typography, color, breakpoint, pageMargins } = styles;

const HeaderTitle = styled(Heading).attrs({ level: '1' })`
  color: ${color.lightest};
  text-align: center;
`;

const HeaderCopy = styled.p`
  font-size: ${typography.size.s3}px;
  line-height: 1.5;
  max-width: ${measure.regular}px;
  color: ${color.lightest};
  margin: 0 auto;

  @media (min-width: ${breakpoint}px) {
    font-size: ${typography.size.m1}px;
    line-height: 36px;
    letter-spacing: -0.41px;
  }
`;

const HeaderContainer = styled(Stack).attrs({
  axis: 'vertical',
  space: '64px',
})<StackProps>`
  ${pageMargins}
  padding-bottom: 64px;
  padding-top: 32px;

  @media (min-width: ${breakpoint}px) {
    padding-bottom: 128px;
    padding-top: 48px;
  }
`;

const HeaderIllustration = styled(ComponentDrivenIllustration)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  max-width: ${measure.regular}px;
`;

export const Header = () => (
  <Backdrop>
    <HeaderContainer>
      <Navbar
        links={[
          { href: '#why', title: 'Why' },
          { href: '#how', title: 'How' },
          { href: '#benefits', title: 'Benefits' },
          { href: '#tools', title: 'Tools' },
        ]}
        githubLink={{
          namespace: 'ComponentDriven',
          repo: 'componentdriven.org',
        }}
      />
      <HeaderIllustration />
      <Stack axis="vertical" space="medium">
        <HeaderTitle as="h1">Component Driven User Interfaces</HeaderTitle>
        <HeaderCopy>
          The development and design practice of building user interfaces with
          modular components. UIs are built from the “bottom up” starting with
          basic components then progressively combined to assemble screens.
        </HeaderCopy>
      </Stack>
    </HeaderContainer>
  </Backdrop>
);
