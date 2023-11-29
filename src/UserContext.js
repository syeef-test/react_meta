import React, { createContext, useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const user = {
    name: "kazi",
    email: "kazi@gmail.com",
    dob: "01/01/2000",
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
