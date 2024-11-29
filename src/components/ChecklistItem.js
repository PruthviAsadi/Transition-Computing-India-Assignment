import React from 'react';

const ChecklistItem = ({ item }) => (
  <div style={{ margin: '10px 0' }}>
    <strong>{item.description}</strong>: {item.passed ? '✅ Passed' : '❌ Failed'}
  </div>
);

export default ChecklistItem;
