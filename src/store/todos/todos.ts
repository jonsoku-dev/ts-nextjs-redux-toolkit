import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';
import { Todo } from '@/type';
import { FeatureKey } from '@/store/FeatureKey';

export const todosInitialState: Todo[] = [
  {
    id: uuid(),
    desc: `Learn React`,
    isComplete: true,
  },
  {
    id: uuid(),
    desc: `Learn Redux`,
    isComplete: true,
  },
  {
    id: uuid(),
    desc: `Learn Redux-ToolKit`,
    isComplete: false,
  },
];

/**
 * Slice
 */
export const todosSlice = createSlice({
  name: FeatureKey.TODOS,
  initialState: todosInitialState,
  reducers: {
    createTodoActionCreator: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{ id: string; desc: string; isComplete: boolean }>,
      ) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false,
        },
      }),
    },
    editTodoActionCreator: (
      state,
      { payload }: PayloadAction<{ id: string; desc: string }>,
    ) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].desc = payload.desc;
      }
    },
    toggleTodoActionCreator: (
      state,
      { payload }: PayloadAction<{ id: string; isComplete: boolean }>,
    ) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state[index].isComplete = payload.isComplete;
      }
    },
    removeTodoActionCreator: (
      state,
      { payload }: PayloadAction<{ id: string }>,
    ) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

/**
 * Actions
 */

export const todosActions = {
  ...todosSlice.actions,
};
