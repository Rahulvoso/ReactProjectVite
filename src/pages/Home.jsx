import React, { useState } from 'react'

import ToastMessage from '../components/ToastMessage'


export default function Home() {

    // Counter State
    const [count, setCount] = useState(0)

    // Textarea State
    const [text, setText] = useState('')

    // Counter Functions
    const handleIncrease = () => {
        setCount(prev => prev + 1)
        ToastMessage.success("Counter increased!")
    }

    const handleDecrease = () => {

        if (count <= 0) {
            ToastMessage.error("Counter cannot go negative!")
            return
        }

        setCount(prev => prev - 1)
        ToastMessage.warning("Counter decreased!")
    }

    const handleReset = () => {
        setCount(0)
        ToastMessage.info("Counter reset to zero!")
    }

    // Textarea Function
    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText('')
        ToastMessage.error("Text cleared!")
    }

    const handleUpperCase = () => {
        setText(prev => prev.toUpperCase())
        ToastMessage.success("Text converted to uppercase!")
    }

    const handleLowerCase = () => {
        setText(prev => prev.toLowerCase())
        ToastMessage.warning("Text converted to lowercase!")
    }

    return (
        <div className="container mt-5">

            {/* Counter Task */}
            <div className="card shadow p-4 mb-5 text-center">

                <h1 className="mb-3">Counter App 🚀</h1>

                <h2 className="display-4 mb-4">
                    {count}
                </h2>

                <div className="d-flex justify-content-center gap-3">

                    <button
                        className="btn btn-success"
                        onClick={handleIncrease}
                    >
                        Increase +
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={handleDecrease}
                    >
                        Decrease -
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                </div>

            </div>

            {/* Textarea Task */}
            <div className="card shadow p-4">

                <h2 className="mb-3">
                    Textarea Task ✍️
                </h2>

                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Type something here..."
                    value={text}
                    onChange={handleTextChange}
                ></textarea>

                {
                    text && (
                        <p className="text-muted mt-2">
                            Total Characters: <strong>{text.trim().length}</strong> |
                            Total Words: <strong>{text.trim().split(/\s+/).filter(word => word !== '').length}</strong>
                        </p>
                    )
                }
                <div className="d-flex mt-3 gap-3">
                    <button disabled={text === ''} onClick={handleClearText} className="btn btn-danger">Clear Text</button>
                    <button disabled={text === ''} onClick={handleUpperCase} className="btn btn-success">UpperCase</button>
                    <button disabled={text === ''} onClick={handleLowerCase} className="btn btn-warning">LowerCase</button>
                </div>

                <div className="mt-3">

                    <h5>Live Preview:</h5>

                    <p className="border p-3 rounded bg-light">
                        {text || "Nothing typed yet..."}
                    </p>

                </div>

            </div>

        </div>
    )
}