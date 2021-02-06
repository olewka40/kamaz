import React, { useContext, useState } from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "../../context/DataContext";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { Params, StyledSelect } from "../Constructor";

export const Images = () => {
  const { contructorStages, models } = useContext(DataContext);
  const { control, handleSubmit } = useForm();
  const [result, setResult] = useState([]);

  const [status, setStatus] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // const results = models.filter(
    //   (e) =>
    //     e.whileBase === data.whileBase && e.powerFilter === data.powerFilter
    // );
    // console.log(results);
    // setResult(results);
    // setStatus(true);
  };
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <ImagesContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Начало</StepLabel>
            <StepContent>
              {contructorStages.map((params) => (
                <Params>
                  <FormControl key={params.nameParam}>
                    <InputLabel>{params.nameParam}</InputLabel>
                    <Controller
                      variant="outlined"
                      name={params.enNameParam}
                      as={StyledSelect}
                      control={control}
                      defaultValue=""
                    >
                      {params.variants.map((variant) => (
                        <MenuItem key={variant.value} value={variant.value}>
                          {variant.label}
                        </MenuItem>
                      ))}
                    </Controller>
                  </FormControl>
                </Params>
              ))}
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === contructorStages.length - 1 ? "Finish" : "Next"}
              </Button>
            </StepContent>
          </Step>
        </Stepper>
        <input type="submit" />
      </form>
      {activeStep === contructorStages.length && (
        <>
          <Button onClick={handleReset}>Reset</Button>
        </>
      )}
    </ImagesContainer>
  );
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
