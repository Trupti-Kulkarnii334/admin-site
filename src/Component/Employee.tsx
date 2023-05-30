import React from "react";
import { useNavigate } from "react-router-dom";
const Employee = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/details/1/");
  };
  const backToDashboard = () => {
    navigate("/dashboard/");
  };
  let employee = [
    {
      number: 1,
      name: "Shloka",
      gender: "Female",
      occupation: "Frontend Developer",
      dateofBirth: "3/10/1998",
    },
    {
      number: 2,
      name: "Trupti",
      gender: "Female",
      occupation: "Frontend Developer",
      dateofBirth: "3/10/1998",
    },
    {
      number: 1,
      name: "Vedanth",
      gender: "male",
      occupation: "Full Stack Developer",
      dateofBirth: "3/10/1998",
    },
    {
      number: 1,
      name: "Samskruti",
      gender: "Female",
      occupation: "Backend Developer",
      dateofBirth: "3/10/1998",
    },
    {
      number: 1,
      name: "Veda",
      gender: "Female",
      occupation: "Frontend Developer",
      dateofBirth: "3/10/1998",
    },
  ];
  return (
    <>
      <tbody>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Occupation</th>
          <th>DOB</th>
        </tr>
        {employee.map((item, index) => (
          <tr key={index}>
            <td>{item.number}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.occupation}</td>
            <td>{item.dateofBirth}</td>
            <td>
              <button onClick={goDetails}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button type="button" onClick={backToDashboard}>
        Back to DashBoard
      </button>
    </>
  );
};
export default Employee;
