import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const dataset = [
  { day: 5, value: 4000 },
  { day: 9, value: 3000 },
  { day: 11, value: 2000 },
  { day: 13, value: 9000 },
  { day: 15, value: 8000 },
  { day: 17, value: 5000 },
  { day: 19, value: 12000 },
  { day: 21, value: 13000 },
  { day: 23, value: 10000 },
  { day: 25, value: 8000 },
  { day: 27, value: 4000 },
];

const CustomBar = ({ fill, x, y, width, height }) => {
  const radius = 19;
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
  );
};

const ChartBar = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={dataset}
        layout="horizontal"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid horizontal={true} vertical={false} stroke="#9b9c9e" strokeDasharray="0" />
        <XAxis type="category" dataKey="day" />
        <YAxis
          type="number"
          domain={[0, 15000]}
          ticks={[0, 5000, 10000, 15000]}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Bar dataKey="value" fill="#49addb" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
