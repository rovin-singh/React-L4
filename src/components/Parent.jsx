import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const Parent = () => {
  const [value, setValue] = React.useState("Bac");
  return (
    <div>
      <input type="text" />
      Parent {value}
      <Child1 info={value} />
      <Child2 />
    </div>
  );
};
export default Parent;
