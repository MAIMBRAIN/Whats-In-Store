import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import './App.css'

const App = () => {
  return (
    <div>
      <RouterProvider router = {routes} />
    </div>
  );
}

export default App;
