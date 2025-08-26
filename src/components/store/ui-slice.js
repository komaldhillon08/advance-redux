import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cratIsVisible: false },
    reducers: {
        toggle(state) {
            state.cratIsVisible = !state.cratIsVisible ;
        }
    }
    
})
   


export const uiActions = uiSlice.actions

export default uiSlice ;