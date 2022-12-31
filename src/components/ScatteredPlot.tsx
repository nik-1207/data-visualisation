import React from "react";
import ReactEcharts from "echarts-for-react";
import { useColorAnalytics } from "../hooks/winedata";
import { ChartDataType } from "../data/chartData";

interface ScatteredPlotProps {
  data: ChartDataType[];
}
const ScatteredPlot: React.FC<ScatteredPlotProps> = ({ data }) => {
  const { colorAnalytics } = useColorAnalytics(data);

  return (
    <div className="container">
      <ReactEcharts option={colorAnalytics} />
    </div>
  );
};

export default React.memo(ScatteredPlot);
