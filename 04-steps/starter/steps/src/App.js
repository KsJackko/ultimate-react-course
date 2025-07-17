import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNextStep() {
    setStep((step) => {
      if (step === 3) return step;
      return step + 1;
    });
  }

  function handlePreviousStep() {
    setStep((step) => {
      if (step === 1) return step;
      return step - 1;
    });
  }

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <button onClick={handleOpen} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              onClick={handlePreviousStep}
              text={'previous'}
              bgColor={'#7950f2'}
              textColor={'#fff'}
            />
            <Button
              onClick={handleNextStep}
              text={'next'}
              bgColor={'#7950f2'}
              textColor={'#fff'}
              emoji={'👉'}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ onClick, text, textColor, bgColor, emoji, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span>{emoji}</span>
      {text}
      {children}
    </button>
  );
}
