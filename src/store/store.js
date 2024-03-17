import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../define_todoSlice/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})