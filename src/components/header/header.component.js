import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  ButtonLink,
  Container,
  Link,
  Logo,
  Group,
  Profile,
  Dropdown,
  Picture,
  Search,
  SearchIcon,
  SearchInput,
  Feature,
  FeatureCallOut,
  Text,
  PlayButton,
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

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...otherProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...otherProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...otherProps }) {
  return <Dropdown {...otherProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...otherProps }) {
  return <Text {...otherProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...otherProps }) {
  return <Link {...otherProps}>{children}</Link>;
};

Header.Frame = function HeaderFrame({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Picture = function HeaderPicture({ src, ...otherProps }) {
  return <Picture {...otherProps} src={`/images/users/${src}.png`} />;
};

Header.Group = function HeaderGroup({ children, ...otherProps }) {
  return <Group {...otherProps}>{children}</Group>;
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

Header.Profile = function HeaderProfile({ children, ...otherProps }) {
  return <Profile {...otherProps}>{children}</Profile>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...otherProps }) {
  return <PlayButton {...otherProps}>{children}</PlayButton>;
};
