import React from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@material-ui/core";
import { StyledSelect } from "../index";

export const Models = ({ result }) => {
  return (
    <Container>
      <StyledSelect variant="outlined">
        {result.map((model) => (
          <MenuItem value={model.value}>{model.modelName}</MenuItem>
        ))}
      </StyledSelect>
    </Container>
  );
};

const Container = styled.div``;
