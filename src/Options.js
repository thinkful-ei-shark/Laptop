import React from "react";
import slugify from "slugify";
import Option from './Option'

export default function Options(props) {
  
 
  const options = props.options.map((option) => {
  const itemHash = slugify(JSON.stringify(option));
  
    return (
      <Option
        key={itemHash}
        onChange={(e) => props.updateFeature(props.featureName, option)}
        id={itemHash}
        name={slugify(props.featureName)}
        feature={props.featureName}
        checked={option.name === props.feature.selected[props.featureName].name}
        currencyProp={props.currency.format(option.cost)}
        itemName={option.name}
        data={option} 
      />
    );
  });
  return options;
}