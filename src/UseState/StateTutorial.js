// import React from "react";

// const StateTutorial = () => {
//   let counter = 0;

//   const increment = () => {
//     counter += 1;
//     console.log(counter);
//   };

//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default StateTutorial;




// import React, { useState } from "react";

// const StateTutorial = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default StateTutorial;




import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;





