import React from "react";

import Bedroom from "./Bedroom";
import Livingroom from "./Livingroom";
import Kitchen from "./Kitchen";
import Fullbath from "./Fullbath";
import Halfbath from "./Halfbath";

function FloorPlan(props) {
  return (
    <div>
      <Bedroom bedNum="1" />
      <Kitchen />
      <Fullbath />
      <Bedroom bedNum="2" />
      <Livingroom />
      <Halfbath />
      <Bedroom bedNum="3" />
    </div>
  );
}

export default FloorPlan;
