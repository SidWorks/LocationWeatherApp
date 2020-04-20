import "./SeasonDisplay.css";
import React from "react";

//helper object for season
const seasonConfig = {
  Summer: {
    text: `A little bit of Summer whole year is all about`,
    iconName: "sun",
  },
  Winter: {
    text: "It is so chilly in here",
    iconName: "snowflake",
  },
};
//function to get the name of the month
const getSeason = (lat, month) => {
  if (month < 3 && month > 8) return lat > 0 ? "Summer" : "Winter";
  else return lat > 0 ? "Winter" : "Summer";
};

const SeasonDisplay = (props) => {
  const Season = getSeason(props.lat, new Date().getDate());
  console.log(Season);
  console.log(`seasonConfig.${Season}`);

  const { text, iconName } = seasonConfig[Season];

  return (
    <div>
      <div className={`season-display ${Season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1 className="advice">{text}</h1>
        <i className={`icon-right massive  ${iconName} icon`} />
      </div>
    </div>
  );
};

export default SeasonDisplay;
