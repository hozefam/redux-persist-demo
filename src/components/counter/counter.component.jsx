import React from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../../redux/counter/counter.actions";

import "./couter.styles.scss";

const Counter = ({ counter: { value }, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <div className="counter-section">
        <div className="counter-button" onClick={() => increment(value)}>
          &#10133;
        </div>
        <span className="value">{value}</span>
        <div className="counter-button" onClick={() => decrement(value)}>
          &#10134;
        </div>
      </div>
      <div className="button" onClick={() => reset()}>
        Reset
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(incrementCount(value)),
  decrement: (value) => dispatch(decrementCount(value)),
  reset: () => dispatch(resetCount()),
});

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
