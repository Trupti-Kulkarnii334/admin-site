import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [companyName, setCompanyname] = useState("");
  const handlesave = () => {
    console.log("save");
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handlecompanyname = (e: any) => {
    setCompanyname(e.target.value);
  };
  return (
    <>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={handlecompanyname}
          />
        </Form.Group>
        <Button type="button" variant="btn btn-primary" onClick={handlesave}>
          Save
        </Button>
      </Form>
    </>
  );
};
export default AddUser;
