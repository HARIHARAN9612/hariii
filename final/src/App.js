import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from "./Signup/Signup";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
         
        </Routes>
    </Router>
  );
}
