import React from "react";
import { EChartsOption } from "echarts-for-react";

import { malicAcidAnalyticsValues } from "./typings";

import WINE_DATA from "../data/Wine-Data.json";

export const useColorAnalytics = () => {
  const colorIntensity: Array<number> = React.useMemo(() => {
    return WINE_DATA.map((wineDetails) =>
      Number(wineDetails["Color intensity"])
    );
  }, []);
  const hue: Array<number> = React.useMemo(() => {
    return WINE_DATA.map((wineDetails) => wineDetails.Hue);
  }, []);

  const colorAnalytics: EChartsOption = React.useMemo(() => {
    return {
      title: {
        text: "Alcohol colour analytics",
        textAlign: "center",
        left: "50%",
      },
      xAxis: {
        type: "category",
        name: "Color Intensity",
        data: colorIntensity,
        nameLocation: "center",
        scale: true,
        nameTextStyle: {
          lineHeight: 50,
        },
      },
      yAxis: {
        name: "Hue",
        type: "value",
        nameLocation: "center",
        nameTextStyle: {
          align: "center",
          lineHeight: 50,
        },
        axisLine: {
          show: true,
        },
      },
      series: [{ data: hue, type: "scatter" }],
    };
  }, [hue, colorIntensity]);

  return { colorAnalytics };
};

export const useAlcoholAnalytics = () => {
  const malicAcidAnalytics = React.useMemo(
    () => new Map<number, malicAcidAnalyticsValues>(),
    []
  );
  const alcoholType: number[] = React.useMemo(() => [], []);
  const avgMalicAcidContent: number[] = React.useMemo(() => [], []);

  //count net amount of malic acid in alcohol of particular category
  // count number of beverages in same category
  // insert above data into map
  WINE_DATA.forEach((wineDetails) => {
    if (malicAcidAnalytics.has(wineDetails.Alcohol)) {
      const malicAcidDetail = malicAcidAnalytics.get(
        wineDetails.Alcohol
      ) as malicAcidAnalyticsValues;

      malicAcidDetail.netMalicAcid += wineDetails["Malic Acid"];
      malicAcidDetail.itemCount++;
    } else {
      malicAcidAnalytics.set(wineDetails.Alcohol, {
        netMalicAcid: wineDetails["Malic Acid"],
        itemCount: 1,
      });
    }
  });

  //get all alcohol type from map and insert into alcoholType array
  //calculate average malic acid content and insert it into avgMalicAcidContent array
  malicAcidAnalytics.forEach((value, key) => {
    alcoholType.push(key);
    avgMalicAcidContent.push(
      Number((value.netMalicAcid / value.itemCount).toFixed(2))
    );
  });

  const avgMalicAcidAnalytics: EChartsOption = React.useMemo(
    () => ({
      title: {
        text: "Malic acid analysis",
        textAlign: "center",
        left: "50%",
      },
      xAxis: {
        type: "category",
        name: "Alcohol",
        data: alcoholType,
        nameLocation: "center",
        scale: true,
        nameTextStyle: {
          lineHeight: 50,
        },
      },
      yAxis: {
        name: "Average Malic acid content",
        type: "value",
        nameLocation: "center",
        nameTextStyle: {
          align: "center",
          lineHeight: 50,
        },
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          data: avgMalicAcidContent,
          type: "bar",
        },
      ],
    }),
    [alcoholType, avgMalicAcidContent]
  );

  return { avgMalicAcidAnalytics };
};
