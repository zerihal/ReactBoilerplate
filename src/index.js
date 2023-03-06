import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

// The above creates a bridge between component(s) and the web browser.
// The code below brings all the pieces together and injects the final product into index.html in
// the public folder - see this file for details.

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);