import React from "react";

const Items = (props) => {
  return (
    <div>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOptionName}</div>
      <div className="summary__option__cost">{props.selectedOptionCost}</div>
    </div>
  );
};

export default Items;