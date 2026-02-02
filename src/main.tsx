import { Todos } from "./Todos";
import "./index.css";
import { select } from "@postact/core";

function App() {
  return (
    <div>
      <h1>Todos</h1>
      <div className="card">
        <Todos />
      </div>
    </div>
  );
}

select("#root").render(<App />);
