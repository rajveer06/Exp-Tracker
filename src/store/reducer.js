import {createSlice} from '@reduxjs/toolkit';

const initalState = {
    categories: [],
    transaction: []
}

export const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        getTransactions:(state) => {
            
        }
    }
})