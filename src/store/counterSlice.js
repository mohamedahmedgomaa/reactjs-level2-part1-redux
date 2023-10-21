import {createSlice} from "@reduxjs/toolkit"
import {loginCheck} from './authSlice'

const initState = {value: 0};

const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state, action) => {
            state.value -= action.payload;
        },
    },
    // extraReducers: {
    //     [loginCheck]: (state, action) => {
    //         state.value = 0;
    //         console.log(action);
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(loginCheck, (state, action) => {
            state.value = 0;
            console.log(action);
        })
    }

});
export const {increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;
