import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increase, decrease} from '../store/counterSlice';
import {loginCheck} from '../store/authSlice';

const Counter = () => {
    const globalState = useSelector(state => state);
    const dispatch = useDispatch();

    const counterHandler = useCallback(
        (type, value) => {
            if (type === "increase") {
                dispatch(increase(value));
            } else {
                dispatch(decrease(value));
            }
        }
        , [dispatch]);

    useEffect(() => counterHandler('increase', 5), [counterHandler]);
    return (
        <div className='App'>
            <h1>Hello Redux Basic</h1>
            {
                globalState.auth.isLoggedIn && (
                    <>
                        <div className='counter'>Counter: {globalState.counter.value}</div>
                        <div>
                            <button className='btn' onClick={() => counterHandler('increase', 5)}>
                                increase +
                            </button>
                            <button className='btn' onClick={() => counterHandler('decrease', 2)}>
                                decrease -
                            </button>
                        </div>
                    </>
                )
            }


            <div>
                <button className='btn'
                        onClick={() => dispatch(loginCheck())}>{globalState.auth.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        </div>
    );
}
export default Counter;