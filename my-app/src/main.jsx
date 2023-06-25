import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Tanso from "./routes/Tanso.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { XMTPProvider } from "@xmtp/react-sdk";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, sepolia, gnosis } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

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

const { chains, publicClient } = configureChains(
  [mainnet, sepolia, polygon, gnosis],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Tanso",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={client}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <XMTPProvider>
            <RouterProvider router={router} />
          </XMTPProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
);
