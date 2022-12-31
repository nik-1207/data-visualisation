import React from "react";
import "./app.css";
import Bar from "../components/Bar";
import ScatterPlot from "../components/ScatterPlot";

const App: React.FC = () => {
  return (
    <div id="app">
      <Bar />
      <ScatterPlot />
    </div>
  );
};
export default App;
