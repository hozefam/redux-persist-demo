import counterActionTypes from "./counter.types";

const INITIAL_STATE = {
  value: 10,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        value: action.payload + 1,
      };
    case counterActionTypes.DECREMENT:
      return {
        ...state,
        value: action.payload - 1,
      };
    case counterActionTypes.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default counterReducer;
