import React, {useState} from 'react'

/***** CSS *****/
import './Input.css'

const Input = () => {

    const [input, setInput] = useState('');

    const addTodo = (e) => {

    }

    return (
        <div className="input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input
