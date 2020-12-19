import  React, {useState} from 'react';

const Guess = (props) => {

  console.clear();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue) { 
      let getRandomNum = Math.floor(Math.random() * 3);
      if(parseInt(inputValue) === parseInt(getRandomNum)) { 
        alert('🙌🏽 🙌🏽 🎉');
      }
    };
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  let [inputValue, setInputValue] = useState(0);

  return ( 
    <div style={{padding:'2em'}}> 
      <h4>{inputValue}</h4>
      <form onSubmit={handleSubmit}>
        <input 
          value={inputValue} 
          onChange={onInputChange} 
          type='number' 
        />
        <button>submit guess</button>
      </form>
    </div>
  )
};

export default Guess;