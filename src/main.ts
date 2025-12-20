import { createCounter } from "./components/counter";
import "./style.css";
import viteLogo from "/vite.svg";

import { html, select } from "@ramptix/postact";

function createMain() {
  return html`
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <h1>Vite + Postact</h1>
      <div class="card">${createCounter()}</div>
      <p class="read-the-docs">
        Edit <code>main.ts</code> to see the magic!<br />
        Click on the Vite logo to learn more.
      </p>
    </div>
  `;
}

select("#app").render(createMain());
