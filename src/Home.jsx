import { useState, useRef } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [h1Text, setH1Text] = useState('');
  const [buttonText, setButtonText] = useState('Login');
  const [isVisible, setIsVisible] = useState(false);
  const [totalprice, setTotalPrice] = useState(0);

  const inputRef = useRef(null);

  function handleSubmit() {
    const inputText = inputRef.current.value.trim();

    if (!loggedIn) {
      if (inputText) {
        setH1Text(`Welcome ${inputText}`);
        setButtonText('Logout');
        setLoggedIn(true);
        inputRef.current.value = ''; // Clear the input field after logging in
      } else {
        setH1Text('Enter Your Name');
      }
    } else {
      setH1Text('Enter Your Name');
      setButtonText('Login');
      setLoggedIn(false);
    }

    setIsVisible(true);
  }

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  function toDo() {
    handleSubmit();
    handleVisibility();
  }
  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter name" />
      <button type="submit" onClick={toDo}>
        {buttonText}
      </button>
      {isVisible && <h1>{h1Text}</h1>}
    </>
  );
}

export default Home;
