import './App.css'

const messages = [
  "Learn React 🏫",
  "Apply for jobs 💼",
  "Invest your new income 👨‍💻"
];

function App() {
  const step = 1;

  function handlePrevious() {
    alert('Test')
  }

  return (
    <div className='steps'>
      <h2>Steps App</h2>
      <div className='numbers'>
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <p className='message'>Step {step}: {messages[step - 1]}</p>
      <div className='buttons'>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => alert('Next')}>Next</button>
      </div>
    </div>
  )
}

export default App
