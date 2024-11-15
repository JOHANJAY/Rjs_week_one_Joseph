import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }
    
    return ( 
        <div> 
            <h1>{count}</h1>
             <button onClick={decrement}>Decrement</button>
             <button onClick={increment}>Increment</button>
             <br />
             <hr />
        </div>
     );
}
 
export default Counter;