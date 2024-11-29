import React, { useState, useEffect } from 'react';
import { fetchChecklist } from '../services/api';
import ChecklistItem from './ChecklistItem';

const ChecklistDashboard = () => {
  const [checklist, setChecklist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChecklist = async () => {
      try {
        const data = await fetchChecklist();
        setChecklist(data);
      } catch (err) {
        setError('Failed to load checklist');
      }
    };

    loadChecklist();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Checklist Dashboard</h1>
      {checklist.map((item) => (
        <ChecklistItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ChecklistDashboard;
