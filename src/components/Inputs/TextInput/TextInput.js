import React from "react";

const TextInput = ({ label, register, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </div>
  );
};

export default TextInput;
