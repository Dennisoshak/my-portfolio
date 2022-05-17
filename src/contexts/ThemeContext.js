import React, { createContext, useState } from "react";

import { themeData } from "../data/themeData";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData.theme);
  // eslint-disable-next-line
  const [contactsTheme, setContactsTheme] = useState(themeData.contactsTheme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme, contactsTheme, drawerOpen, setHandleDrawer };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
