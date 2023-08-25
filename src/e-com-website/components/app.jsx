import React from "react";
import Home from "./Home";
import About from "./About";
import UserDetailes from "./UserDetailes";
import Service from "./Service";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

const Routeres = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="//:id" element={<UserDetailes />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routeres;
