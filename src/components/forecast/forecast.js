import React from "react";
import { Accordion } from "react-accessible-accordion";

function Forecast() {
  return (
    <div>
      F<label className="title">Daily</label>
      <Accordion allowZeroExpanded></Accordion>
    </div>
  );
}

export default Forecast;
