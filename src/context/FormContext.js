import { createContext, useState } from "react";
import { initialFormValue } from "./data";

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [formValue, setFormValue] = useState(initialFormValue);



  return (
    <FormContext.Provider
      value={{ formValue, setFormValue }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
