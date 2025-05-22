import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from './features/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;