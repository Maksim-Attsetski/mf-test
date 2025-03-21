import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      name: 'Maks',
      age: 23,
      id: 'fwgo43ijhwei',
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
