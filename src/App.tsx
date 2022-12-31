import React from "react";
import "./index.css";
import Bar from "./components/Bar";
import ScatterPlot from "./components/ScatteredPlot";
import WINE_DATA from "./data/Wine-Data.json";

const App: React.FC = () => {
  return (
    <div id="app">
      <Bar data={WINE_DATA} />
      <ScatterPlot data={WINE_DATA} />
    </div>
  );
};
export default App;
