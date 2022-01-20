import React, { useState, useEffect } from "react";

const App = () => {
  const [currCount, updatedCount] = useState(0);

  useEffect(() => {
    alert("Hello, Counter will go from 1 to 25.");
  }, []);

  const incNum = () => {
    if (currCount <= 24) updatedCount(currCount + 1);
    else alert("Counter Limit Reached.");
  };

  const decNum = () => {
    if (currCount !== 0) updatedCount(currCount - 1);
    else alert("Counter cannot go Below 0.");
  };

  const backToZero = () => {
    updatedCount(currCount - currCount);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{currCount}</h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decremment</button>
          </div>
          <button onClick={backToZero}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
