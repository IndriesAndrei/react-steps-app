import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';

const messages = [
  "Learn React 🏫",
  "Apply for jobs 💼",
  "Invest your new income 👨‍💻"
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if(step > 1) {
      // wrong way of update state based on current state
      // setStep(step - 1)

      // correct way of updating state based on current state
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if(step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      {/* correct way of updating state for isOpen is to set callback function */}
      <button className='close' onClick={() => setIsOpen((is) => !is)}>X</button>
      { isOpen && (
        <div className='steps'>
          <h2>Steps App</h2>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>

          <div className='buttons'>
            <Button backgroundColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button backgroundColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>

          <Counter />
        </div>
      )}
    </div>
  )
}

function StepMessage({step, children}) {
  return  <div className='message'>
            <h3>Step {step}:</h3>
            {children}
          </div>
}

function Button({textColor, backgroundColor, onClick, children}) {
  return <button style={{ backgroundColor: backgroundColor, color: textColor }} onClick={onClick}>
    {children}
  </button>
}

export default App
