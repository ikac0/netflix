import React from "react";
import { Route, Redirect } from "react-router-dom";

export function isUserRedirect({ user, loggedInPath, children, ...other }) {
  return (
    <Route
      {...other}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
