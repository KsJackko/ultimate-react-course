import { useState } from 'react';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'charger', quantity: 1, packed: false },
  { id: 4, description: 'condom', quantity: 10, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleReset() {
    const confirmed = window.confirm('Are you sure to delete all items?');
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <h1>🏝️ Far Away 🧳</h1>
      <Form onItems={setItems} />
      <PackingList
        items={items}
        onItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
