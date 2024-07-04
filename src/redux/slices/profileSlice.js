import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personProfile: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPersonProfile: (state, action) => {
      state.personProfile = action.payload;
    },
  },
});

export const { setPersonProfile } = profileSlice.actions;
export const selectPersonProfile = (state) => state.profile.personProfile;

export default profileSlice.reducer;
