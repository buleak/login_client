import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

enum GENDER {
  other = -1,
  female = 0,
  male = 1,
}
export type Role = "GUEST" | "MEMBER" | "ADMIN";
export type Gender = GENDER;
export interface UserState {
  id: string;
  user_name: string;
  real_name: string;
  pass_word?: string;
  age?: number;
  gender?: Gender;
  work_address?: string;
  role: Role;
}

const initialState = {} as UserState;
export type UserStateKey = keyof UserState;
export type UserStateValue = keyof typeof initialState;
interface Fields {
  field: UserStateKey;
  value: never;
}

export const slice = createSlice({
  name: "register",
  initialState,
  reducers: {
    changeField(state, action: PayloadAction<Fields>) {
      let { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { changeField } = slice.actions;
export const registerSliceReducer = slice.reducer;
