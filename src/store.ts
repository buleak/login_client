import {configureStore} from '@reduxjs/toolkit';
import {registerSliceReducer} from '@/features/register/slice';

export const store = configureStore({
  reducer: {
    register: registerSliceReducer
  }
})