import React, { useState, useContext, createContext } from "react";

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from "./card.styles";

export const FeatureContext = createContext();

export default function Card({ children, ...otherProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...otherProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...otherProps }) {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Card.Entities = function CartEntities({ children, ...otherProps }) {
  return <Entities {...otherProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ children, category, ...otherProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
      </Content>
      <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>
          {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
        </Maturity>
      </Group>
    </Feature>
  ) : null;
};

Card.Meta = function CardMeta({ children, ...otherProps }) {
  return <Meta {...otherProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...otherProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...otherProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...otherProps }) {
  return <Image {...otherProps} />;
};
