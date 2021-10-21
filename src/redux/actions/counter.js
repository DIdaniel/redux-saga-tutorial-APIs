import { INCREMENT, DECREMENT } from "../types/types";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
