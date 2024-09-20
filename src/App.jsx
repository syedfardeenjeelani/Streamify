// src/App.jsx
import React from "react";
import { DataProvider } from "./context/DataContext";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <DataProvider>
      <Dashboard />
    </DataProvider>
  );
}

export default App;
