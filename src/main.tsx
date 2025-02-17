import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { theme } from "./theme.tsx";

import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
