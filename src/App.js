import React, { useState } from "react";

import Summary from "./Summary";
import Features from "./Features";

import "./App.css";


const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function App(props) {
  const [state, setState] = useState({
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)" || "",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04" || "",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v" || "",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs' || "",
        cost: 1500,
      },
    },
  });

  const updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, state.selected);
    selected[feature] = newValue;
    setState({ selected });
  };

  return (
    <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        
        <Features
          features={props.features}
          header="Customize your Laptop"
          updateFeature={(feature, newValue) =>
            updateFeature(feature, newValue)
          }
          currency={USCurrencyFormat}
          state={state}
        />
        <Summary state={state} currency={USCurrencyFormat} />
      </main>
    </div>
  );
}

export default App;