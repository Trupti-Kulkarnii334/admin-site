import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const employeelist = () => {
    navigate("/employee/");
  };

  const logout = () => {
    navigate("/login/");
  };
  return (
    <div>
      <h3>
        Welcome to Dashboard <br></br>
        {localStorage.getItem("username")}
      </h3>
      <Button type="button" onClick={employeelist}>
        Employee Details
      </Button>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};
export default DashBoard;
