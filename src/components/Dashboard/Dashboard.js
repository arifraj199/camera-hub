import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000
    }
  ];
  return (
    <div className="chart-container">
      <div className="month-wise-sell">
        <h2>Month Wise Sells</h2>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} />
          <YAxis dataKey={"sell"} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={"sell"} stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="investment-revenue">
        <h2>Investment vs Revenue</h2>
        <BarChart width={500} height={400} data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} />
          <YAxis dataKey={"investment"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
