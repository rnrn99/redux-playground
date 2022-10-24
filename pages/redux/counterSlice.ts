import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CounterState {
  value: number;
}

interface ResponseValue {
  sumValue: number;
}

const initialState: CounterState = {
  value: 0,
};

export const addAsync = createAsyncThunk("counter/addAsync", async () => {
  const res = await fetch("/api/sum");
  const { sumValue }: ResponseValue = await res.json();
  return sumValue;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
