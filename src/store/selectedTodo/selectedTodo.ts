import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeatureKey } from '@/store/FeatureKey';

export const selectedTodoSlice = createSlice({
  name: FeatureKey.SELECTED_TODO,
  initialState: null as string | null,
  reducers: {
    selectTodoActionCreator: (
      state,
      { payload }: PayloadAction<{ id: string }>,
    ) => payload.id,
  },
});

export const selectedTodoActions = {
  ...selectedTodoSlice.actions,
};
