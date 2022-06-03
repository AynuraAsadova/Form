import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const AddForm = () => {
    
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    alert(name, placeholder)
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            name='label'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='placeholder'
          
            name='placeholder'
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
       
          />
        </Form.Group>
        <Button type='submit' variant='success' className='w-100'>
         Submit Form
        </Button>
      </Form>
    </>
  );
};

export default AddForm;
