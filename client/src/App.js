import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NasaPhoto from "./components/NasaPhoto";
import Register from "./components/Register";
import PrivateRoute from "./components/Routes/Private";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nasaphoto" element={<PrivateRoute />}>
        <Route path="" element={<NasaPhoto />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
