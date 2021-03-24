import React from "react";
import { useForm } from "react-hook-form";

import TextInput from "../Inputs/TextInput/TextInput";

const FormGeneral = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Input label="First Name" register={register} required /> */}
        <TextInput label="First Name" register={register} required />
        {/* <Select label="Age" ref={register} /> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormGeneral;
