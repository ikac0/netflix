import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  ButtonLink,
  Container,
  Logo,
  Feature,
  FeatureCallOut,
  Text,
  TextLink,
} from "./header.styles";

export default function Header({ bg = true, children, ...otherProps }) {
  return bg ? <Background {...otherProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...otherProps }) {
  return <Feature {...otherProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...otherProps
}) {
  return <FeatureCallOut {...otherProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...otherProps }) {
  return <TextLink {...otherProps}>{children}</TextLink>;
};

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...otherProps }) {
  return <ButtonLink {...otherProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...otherProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...otherProps} />
    </ReactRouterLink>
  );
};
