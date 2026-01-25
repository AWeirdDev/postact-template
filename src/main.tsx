import { Counter } from "./App";
import "./index.css";
import { select } from "@postact/core";

select("#root").render(<Counter initial={0} />);
