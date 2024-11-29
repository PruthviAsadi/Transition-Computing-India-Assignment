import React from 'react';
import './App.css'; // Optional: Import CSS for styling
import ChecklistDashboard from './components/ChecklistDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Checklist System</h1>
      </header>
      <main>
        <ChecklistDashboard />
      </main>
    </div>
  );
}

export default App;
