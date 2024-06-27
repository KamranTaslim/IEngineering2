import React from "react";
import Navbar from "./components/Navbar/Navbar";

import ServicesDetail from "./components/ServicesDetail/ServicesDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <ServicesDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
