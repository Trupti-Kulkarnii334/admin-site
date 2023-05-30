import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import DashBoard from "./Component/DashBoard";
import { Alert } from "react-bootstrap";
import Employee from "./Component/Employee";
import Details from "./Component/Details";
import AddUser from "./Component/AddUser";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="alert" element={<Alert />} />
          <Route path="employee" element={<Employee />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="addUser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
