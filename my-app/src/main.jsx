import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Tanso from "./routes/Tanso.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tanso/",
    element: <Tanso />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
