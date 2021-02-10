import React from "react";
import styled from "styled-components";

export const Images = () => {
  return <ImagesContainer>ImagesContainer</ImagesContainer>;
};

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 100%;
  background-color: chartreuse;
`;
