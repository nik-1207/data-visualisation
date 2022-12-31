import React from "react";
import ReactEcharts from "echarts-for-react";
import { useColorAnalytics } from "../../hooks/winedata";

const ScatterPlot: React.FC = () => {
  const { colorAnalytics } = useColorAnalytics();

  return (
    <div className="container">
      <ReactEcharts option={colorAnalytics} />
    </div>
  );
};

export default ScatterPlot;
