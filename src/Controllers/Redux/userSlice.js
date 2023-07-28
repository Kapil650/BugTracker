import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name : " user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Kapil"})
            state.push({name:"Rahil"})

        }
    }
})
export default slice.reducer;

export const {getUser} = slice.actions;