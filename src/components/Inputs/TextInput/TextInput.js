import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ label, register, errors }) => {
  return (
    <div>
      {/* <label>{label}</label>
      <input name={label} ref={register({ required: true, maxLength: 4 })} /> */}
      <TextField
        id="filled-basic"
        name={label}
        label={label}
        variant="filled"
        inputRef={register}
      />
      {errors && <p>This field is required</p>}
    </div>
  );
};

export default TextInput;
