import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { DataContext } from "../../context/DataContext";
import { Controller, useForm } from "react-hook-form";
import { Models } from "./Model";
export const Constructor = () => {
  const { control, handleSubmit } = useForm();
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(false);
  const { contructorStages, models } = useContext(DataContext);


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



  const onSubmit = (data) => {
    console.log(data);
    const results = models.filter(
      (e) =>
        e.whileBase === data.whileBase && e.powerFilter === data.powerFilter
    );
    console.log(results);
    setResult(results);
    setStatus(true);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" />
      </form>
      {status && <Models result={result} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  background-color: cyan;
`;
export const StyledSelect = styled(Select)`
  width: 200px;
`;

export const Params = styled.div`
  padding: 5px 10px;
`;
