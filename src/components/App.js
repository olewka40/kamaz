import React from "react";
import { DataContext } from "./context/DataContext";
import styled, { createGlobalStyle } from "styled-components";
import { Main } from "./Main";
import { Header } from "./Header";

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

export const App = () => {
  const contructorStages = [
    {
      id: 0,
      enNameParam: "whileBase",
      nameParam: "Колёсная база",
      variants: [
        {
          value: 0,
          label: "4x2",
        },
        {
          value: 1,
          label: "6x4",
        },
        {
          value: 2,
          label: "6x6",
        },
        {
          value: 3,
          label: "8x4",
        },
      ],
    },
    {
      id: 1,
      enNameParam: "powerFilter",
      nameParam: "Отбор мощности",

      variants: [
        {
          value: 0,
          label: "От КПП",
        },
        {
          value: 1,
          label: "От ДВС",
        },
      ],
    },
  ];
  const models = [
    {
      modelName: "КАМАЗ 53605-3952",
      value: "536053952",
      whileBase: 0,
      powerFilter: 0,
    },
    {
      modelName: "КАМАЗ 53605-3954",
      value: "536053954",
      whileBase: 0,
      powerFilter: 1,
    },
    {
      modelName: "КАМАЗ 65115-3971",
      value: "651153971",
      whileBase: 1,
      powerFilter: 1,
    },
    {
      modelName: "КАМАЗ 65115-6058",
      value: "651156058",
      whileBase: 1,
      powerFilter: 0,
    },

    {
      modelName: "КАМАЗ 43253-3010-28",
      value: "43253301028",
      whileBase: 0,
      powerFilter: 0,
    },
  ];
  console.log(contructorStages);

  return (
    <DataContext.Provider value={{ contructorStages, models }}>
      <MainComponent>
        <GlobalStyle />
        <Header />
        <Main />
      </MainComponent>
    </DataContext.Provider>
  );
};
