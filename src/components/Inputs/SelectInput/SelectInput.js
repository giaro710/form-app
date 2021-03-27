import React from "react";
import Option from "./Option/Option";

const SelectInput = ({ label, register }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={label} ref={register}>
        <Option value="privato">Privato</Option>
        <Option value="agenzia">Agenzia</Option>
      </select>
    </div>
  );
};

export default SelectInput;
