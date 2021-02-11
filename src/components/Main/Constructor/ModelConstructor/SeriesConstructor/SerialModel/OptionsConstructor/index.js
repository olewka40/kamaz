import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormContainer } from "../../index";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../../../../Constructor/index";
import { Controller, useForm } from "react-hook-form";

export const OptionsConctructor = ({ equipmentModelName }) => {
  const [openNextStep, setOpenNextStep] = useState(false);
  const { control, register, handleSubmit } = useForm();

  const [openNext, setOpenNext] = useState(false);
  console.log(equipmentModelName.options, 12312312312751286519265192659);
  const nextStep = (data) => {
    console.log(data);
    setTimeout(() => {
      setOpenNext(!openNext);
    }, 100);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpenNextStep(!openNextStep);
    }, 100);
  }, []);
  return (
    <Container>
      {openNextStep && (
        <>
          <form onSubmit={handleSubmit(nextStep)}>
            {equipmentModelName.options.map((e) => (
              <input
                type="checkbox"
                placeholder="qwe"
                name={e.id}
                ref={register}
              />
            ))}

            <input type="submit" />
          </form>
          <StyledButton
            onClick={nextStep}
            variant="contained"
            color="primary"
            type="submit"
          >
            Подтвердить
          </StyledButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div``;
