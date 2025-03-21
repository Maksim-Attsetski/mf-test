import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

export const reducers = {
  user: userSlice.reducer,
};

export const store = configureStore({
  reducer: combineReducers(reducers),
});
