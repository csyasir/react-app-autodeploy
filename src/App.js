import React from 'react';
import './styles/App.css';

import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      <Counter value = {10} />
      <Counter value = {100} />
    </div>
  );
}

export default App;
