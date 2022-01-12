import React, { useState, useReducer } from "react";

const ACTIONS = { INCREMENT: "increment", DECREMENT: "decrement" };

function reducer(state, action) {
   switch (action.type) {
      case ACTIONS.INCREMENT:
         return {
            count: state.count + 1,
         };

      case ACTIONS.DECREMENT:
         return {
            count: state.count - 1,
         };
      default:
         return state;
   }
}

function Counter() {
   //const [count, setCount] = useState(0);
   const [count, dispatch] = useReducer(reducer, 0);

   function incrementCount() {
      //const updatedCount = count + 1;
      //setCount(updatedCount);
      dispatch({ type: ACTIONS.INCREMENT });
   }

   function decrementCount() {
      //const updatedCount = count - 1;
      //setCount(updatedCount);
      dispatch({ type: ACTIONS.DECREMENT });
   }

   return (
      <div>
         <button onClick={incrementCount}>+</button>
         <p>{count}</p>
         <button onClick={decrementCount}>-</button>
      </div>
   );
}

export default Counter;
