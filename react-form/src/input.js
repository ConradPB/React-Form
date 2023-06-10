import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay connected.</h2>
        <p>
          If you would like to stay up-to-date with our latest products, connect
          with other students who share your interests and passion 
          and receive unique offers, please sign up for our newsletter 
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} value={userInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

export default Input;
