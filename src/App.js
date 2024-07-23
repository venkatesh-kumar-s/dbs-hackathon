import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CreditCardDetails from "./components/CreditCardDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav>Credit Card Management System (CMS)</nav>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/control-center/:id" exact element={<CreditCardDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
