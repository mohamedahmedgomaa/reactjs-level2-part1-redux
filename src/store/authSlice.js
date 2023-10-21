import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false},
    reducers: {
        loginCheck: (state, action) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    }
});
export const {loginCheck} = authSlice.actions;
export default authSlice.reducer;
