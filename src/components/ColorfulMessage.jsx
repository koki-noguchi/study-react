import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStudyStyle = {
    color: color,
    textSize: "16px"
  };

  return <p style={contentStudyStyle}>{children}</p>;
};

export default ColorfulMessage;
