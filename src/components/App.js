import React, { useState } from "react";
import { DataContext } from "./context/DataContext";
import styled, { createGlobalStyle } from "styled-components";
import { Main } from "./Main";
import { Header } from "./Header";

export const App = () => {
  return (
    <DataContext.Provider value={1}>
      <MainComponent>
        <GlobalStyle />
        <Header />
        <Main />
      </MainComponent>
    </DataContext.Provider>
  );
};

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;  
background-color: #bababa;
    display: flex;
    justify-content: center;
  }
  #root{
  height: 100%;
  width: 80%;   
    background-color: white;

  }
`;
