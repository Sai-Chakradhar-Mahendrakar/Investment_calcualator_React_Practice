import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration>=1;

  function handleInputChange(inputIdentifier, newValue){
      setUserInput((prevInput)=>{
          return {
              ...prevInput,
              [inputIdentifier]:newValue
          }
      })
  }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleInputChange}/>
      {!inputIsValid && (
        <p className='center'>Please Enter a duration greater than Zero</p>
      )}
      {inputIsValid && <Result userInput={userInput}/>}
    </>
  )
}

export default App
