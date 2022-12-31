import React from "react";
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
