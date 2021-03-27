import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import TextInput from "../Inputs/TextInput/TextInput";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import ControlledOpenSelect from "../Inputs/ControlledOpenSelect/ControlledOpenSelect";

const ParentForm = () => {
  let schema = yup.object().shape({
    firstName: yup.string().required(),
    statoSociale: yup.number().required(),
  });

  const { register, control, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />

        <Controller
          name="statoSociale"
          control={control}
          defaultValue="Privato"
          render={({ onChange, value }) => (
            <ControlledOpenSelect
              label="Chi sei?"
              onChange={onChange}
              value={value}
            />
          )}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default ParentForm;
