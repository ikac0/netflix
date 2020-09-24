import React from "react";
import { Container, Title, SubTitle } from "./feature.styles";

export default function Feature({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};
