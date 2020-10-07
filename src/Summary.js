import React from "react";
import Items from "./Item";
import Total from "./Total";

import "./App.css";
const Cart = (props) => {
  const summary = Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    const selectedOption = props.state.selected[feature];

    return (
      <div className="summary_option" key={featureHash}>
        <Items
          feature={feature}
          selectedOptionName={selectedOption.name}
          selectedOptionCost={props.currency.format(selectedOption.cost)}
        />
      </div>
    );
  });
  const total = Object.keys(props.state.selected).reduce(
    (acc, curr) => acc + props.state.selected[curr].cost,
    0
  );
  return (
    <section className="main__summary">
      {summary}
      <div className="summary__total">
        <Total total={props.currency.format(total)} />
      </div>
    </section>
  );
};

export default Cart;