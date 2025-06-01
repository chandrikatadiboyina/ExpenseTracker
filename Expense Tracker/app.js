function App() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAdd = () => {
    if (title && category && amount) {
      setExpenses([...expenses, { title, category, amount }]);
      setTitle('');
      setCategory('');
      setAmount('');
    }
  };
   return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp.title} - {exp.category} - ${exp.amount}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;



