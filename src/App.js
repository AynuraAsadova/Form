import { useState } from "react";
import "./App.css";

function App() {
  const [formValue, setFormValue] = useState([
    {
      label: "",
      value: "",
      date: "",
      type: "",
    },
  ]);

  const handleChange = (i, e) => {
    const newFormValue = [...formValue];
    newFormValue[i][e.target.name] = e.target.value;
    console.log(newFormValue);
    setFormValue(newFormValue);
  };

  const addFormFields = () => {
    setFormValue([{ label: "", value: "", date: "", type: "" }, ...formValue]);
  };

  const removeFormFields = (i) => {
    const newFormValue = [...formValue];
    newFormValue.splice(i, 1);
    setFormValue(newFormValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formValue));
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <h4 className='text-center'> Form</h4>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            {formValue.map((x, i) => (
              <div className='col-6' key={i}>
                <div className='mb-3'>
                  <label className='w-100'>Label</label>
                  <input
                    className='w-100'
                    type='text'
                    name='label'
                    value={x.label || ""}
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='w-100'>Placeholder</label>
                  <input
                    className='w-100'
                    type='text'
                    name='value'
                    value={x.value || ""}
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='w-100'>Date</label>
                  <input
                    className='w-100'
                    type='date'
                    name='date'
                    value={x.date || ""}
                    onChange={(e) => handleChange(i, e)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='type' className='w-100'>
                    Type:
                  </label>
                  <select
                    id='type'
                    name='type'
                    className='w-100'
                    value={x.type || ""}
                    onChange={(e) => handleChange(i, e)}
                  >
                    <option value='input' onChange={(e) => handleChange(i, e)}>
                      input
                    </option>
                    <option
                      value='datepicker'
                      onChange={(e) => handleChange(i, e)}
                    >
                      datepicker
                    </option>
                    <option
                      value='textarea'
                      onChange={(e) => handleChange(i, e)}
                    >
                      textarea
                    </option>
                  </select>
                </div>
                {i ? (
                  <button
                    type='button'
                    className='remove'
                    onClick={() => removeFormFields(i)}
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
            <div className='mt-5 mb-2'>
              <button type='button' onClick={() => addFormFields()}>
                Add
              </button>
              <button type='submit' className='ms-2'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
