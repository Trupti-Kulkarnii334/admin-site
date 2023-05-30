import { SetStateAction, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handlelogin = (e: any) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    if (username === "" || password === "") {
      alert("username or password can't blank");
      return;
    }
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Please Enter the Valid Username and Password</Alert>,
        document.getElementById("root")
      );
    }
  };

  const handlereset = () => {
    setUsername("");
    setPassword("");
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
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type="button" variant="btn btn-primary" onClick={handlelogin}>
          Login
        </Button>
        <Button type="button" variant="btn btn-secondary" onClick={handlereset}>
          Reset
        </Button>
      </Form>
    </>
  );
};
export default Login;
