import counterActionTypes from "./counter.types";

export const incrementCount = (value) => ({
  type: counterActionTypes.INCREMENT,
  payload: value,
});

export const decrementCount = (value) => ({
  type: counterActionTypes.DECREMENT,
  payload: value,
});

export const resetCount = () => ({
  type: counterActionTypes.RESET,
});
