import React from 'react';

const Progress = ({ percent, name }) => (
  <div className="shadow w-full bg-neutral-300 rounded overflow-hidden mb-2">
    <div
      className="bg-primary-600 text-sm py-1 text-white"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
