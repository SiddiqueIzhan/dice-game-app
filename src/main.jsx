import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Intro from "./pages/Intro";
import GamePage from "./pages/GamePage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Intro />} />
      <Route path="game" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);
