import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Tanso from "./routes/Tanso.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tanso/:subpage?/:subitem?",
    element: <Tanso />,
  },
]);

const client = new Client({
  url: "https://sepolia.easscan.org/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
