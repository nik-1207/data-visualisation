import React from "react";
import ReactEcharts from "echarts-for-react";

import { useAlcoholAnalytics } from "../../hooks/winedata";

const Bar: React.FC = () => {
  const { avgMalicAcidAnalytics } = useAlcoholAnalytics();

  return <ReactEcharts option={avgMalicAcidAnalytics} />;
};

export default Bar;
