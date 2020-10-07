import React, { useState } from "react";
import Header from "./Header";
import Summary from "./Summary";
import Features from "./Features";
import FEATURES from './Store'

import "./App.css";


const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function App() {
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
      <Header />
      </header>
      <main>
        
        <Features
          features={FEATURES}
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