import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <>
            <div>
                <hr />
                <div>
                    <h3>Counter</h3>
                    <button onClick={() => setCount((c) => c - 1)}>-</button>
                    <span>Count: {count}</span>
                    <button onClick={() => setCount((c) => c + 1)}>+</button>
                </div>
            </div>

            <p>
                <span>{count === 0 ? "Today is: " : count > 0 ? `${count} days from today is: ` : `${count} days ago was `}</span>
                <span><strong>{date.toDateString()}</strong></span>
            </p>
        </>
    )
}

export default Counter;