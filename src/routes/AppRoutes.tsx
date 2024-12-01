import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainLayout from "layouts/MainLayout";
import Home from "pages/Home";
import Login from "pages/Login";
import Users from "pages/Users";
import UserDetails from "pages/Users/UserDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
