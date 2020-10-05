import React from "react";

export default function Option(props) {
  return (
    <div className="feature__item, feature_option, feature_label">
      <input
        type="radio"
        id={props.id}
        className={props.className}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
      />

      <label htmlFor={props.id} className="feature__label">
        {props.itemName} {props.currencyProp}
      </label>
    </div>
  );
}