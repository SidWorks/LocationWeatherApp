import React from "react";

const Spiner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.msg}</div>
    </div>
  );
};
Spiner.defaultProps = {
  msg: "Loading...",
};
export default Spiner;
