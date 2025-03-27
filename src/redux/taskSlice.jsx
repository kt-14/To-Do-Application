import { createSlice } from '@reduxjs/toolkit';

// Define the task slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [], // Initial state is an empty array
  reducers: {
    // Action to add a new task
    addTask: (state, action) => {
      state.push(action.payload);

      // Sorting tasks based on priority (High → Medium → Low)
      state.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    },

    // Action to remove a task by index
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

// Export actions for use in components
export const { addTask, removeTask } = taskSlice.actions;

// Export the reducer to configure the store
export default taskSlice.reducer;
