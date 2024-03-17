import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../define_todoSlice/todoSlice'

export default function AddTodo() {
    const [input,setInput] = useState('')
    const disp = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        disp(addTodo(input))
        setInput('')
    }
    return (
        <>
            <form class="w-full max-w-sm" onSubmit={addTodoHandler}>
                <div class="flex items-center border-b border-teal-500 py-2">
                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Someting..." aria-label="Todo" value={input} onChange={(e)=>setInput(e.target.value)} />
                        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" >
                            ADD
                        </button>
                </div>
            </form>
        </>
    )
}
