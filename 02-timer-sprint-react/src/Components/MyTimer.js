import React, { useState, useEffect } from "react";

const MyTimer = () => {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(60);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTest() {
    setTest(60);
  }

  useEffect(() => {
    test > 0 && setTimeout(() => setTest(test - 1), 1000);
  }, [test]);

  useEffect(() => {
    count > 10 && setTimeout(() => setCount(count - 1), 1000);
  }, [count]);

  return (
    <div>
      <h1>{count > 0 ? count : "DONE"}</h1>
      <button type="button" onClick={handleClick}>
        ADD
      </button>
      <h1>{test}</h1>
      <button type="button" onClick={() => handleClickTest()}>
        ADD teste
      </button>
    </div>
  );
};

export default MyTimer;
