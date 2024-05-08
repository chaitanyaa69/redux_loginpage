import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user : null
    },
    reducers:{
        login : (state,action) => {
            state.user=action.payload
        },
        logout : (state) => {
            state.user=null
        },
        changeUsername : (state, action) => {
            state.user.name = action.payload; // Update username property within the user object
          }
    }
})
//exporting the actions

export const {login,logout,changeUsername} = userSlice.actions
//export the state
export const selectUser = (state) => state.user.user;
//export the reducer
export default userSlice.reducer