import React from "react";

const Total = (props) => {
  return (
    <>
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">{props.total}</div>
    </>
  );
};

export default Total;