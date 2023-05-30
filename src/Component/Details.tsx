import { useParams } from "react-router-dom";
import Employee from "../Component/Employee";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const backToEmployee = () => {
    navigate("/employee/");
  };
  const addUser = () => {
    navigate("/addUser/");
  };
  let { id } = useParams();
  let employee = {
    number: "1",
    name: "Shloka",
    gender: "Female",
    occupation: "Frontend Developer",
    dateofBirth: "3/10/1998",
  };
  return (
    <div>
      <div>
        <h1>Employee Details Page {id}</h1>
        <div>
          Number : {employee.number}
          <br></br>
          Name : {employee.name}
          <br></br>
          Gender : {employee.gender}
          <br></br>
          Occupation : {employee.occupation}
          <br></br>
          dateofBirth : {employee.dateofBirth}
          <br></br>
        </div>
        <button type="button" onClick={backToEmployee}>
          Back to DashBoard
        </button>
        <button type="button" onClick={addUser}>
          Add User
        </button>
      </div>
    </div>
  );
};
export default Details;
