import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormContainer } from "../../index";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../../index";
import { Controller, useForm } from "react-hook-form";

export const SerialModel = ({ equipmentSeries }) => {
  const [openNextStep, setOpenNextStep] = useState(false);
  console.log(equipmentSeries[0].model);
  const { control, handleSubmit } = useForm();
  const nextStep = (data) => {};

  useEffect(() => {
    setTimeout(() => {
      setOpenNextStep(!openNextStep);
    }, 100);
  }, []);

  return (
    <Container>
      {/*{openNextStep && (*/}
      {/*  <form onSubmit={handleSubmit(nextStep)}>*/}
      {/*    <FormContainer>*/}
      {/*      <FormControl>*/}
      {/*        <InputLabel>Выбор модели оборудования </InputLabel>*/}
      {/*        <Controller*/}
      {/*          variant="outlined"*/}
      {/*          name="SerialModel"*/}
      {/*          as={StyledSelect}*/}
      {/*          control={control}*/}
      {/*          defaultValue=""*/}
      {/*        >*/}
      {/*          {equipmentSeries[0].model.map((mod) => (*/}
      {/*            <MenuItem key={mod.enName} value={mod.enName}>*/}
      {/*              {mod.modelName}*/}
      {/*            </MenuItem>*/}
      {/*          ))}*/}
      {/*        </Controller>*/}
      {/*      </FormControl>*/}
      {/*      <StyledButton*/}
      {/*        onClick={nextStep}*/}
      {/*        variant="contained"*/}
      {/*        color="primary"*/}
      {/*        type="submit"*/}
      {/*      >*/}
      {/*        Подтвердить*/}
      {/*      </StyledButton>*/}
      {/*    </FormContainer>*/}
      {/*  </form>*/}
      {/*)}*/}
    </Container>
  );
};

const Container = styled.div``;
