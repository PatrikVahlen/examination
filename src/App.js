import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
