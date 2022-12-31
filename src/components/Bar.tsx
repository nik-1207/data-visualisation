import React from "react";
import ReactEcharts from "echarts-for-react";
import { useAlcoholAnalytics } from "../hooks/winedata";
import { ChartDataType } from "../data/chartData";

interface BarProps {
  data: ChartDataType[];
}

const Bar: React.FC<BarProps> = ({ data }) => {
  const { avgMalicAcidAnalytics } = useAlcoholAnalytics(data);

  return (
    <div className="container">
      <ReactEcharts option={avgMalicAcidAnalytics} />
    </div>
  );
};

export default React.memo(Bar);
