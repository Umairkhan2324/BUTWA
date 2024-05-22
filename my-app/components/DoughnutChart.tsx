"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


import React from 'react'

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data={
    datasets:[
      {
        label:"Banks",
        backgroundColor: ['#747b6',"#2256d8","#2f91fa"],
        data:[1250,3750,1250,]
      }
    ],
    labels:["Bank1","Bank2","Bank3","Bank4","Bank5","Bank6","Bank7","Bank8","Bank9","Bank10"]
  }

  return <Doughnut  
  data={data}
  options={
    {
      cutout:"60%",
      plugins:{
        legend:{
          display:false
        }
      }
    }
  }/>
}
export default DoughnutChart