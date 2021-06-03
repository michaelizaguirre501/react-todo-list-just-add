import React from "react";

const Header = (props) => {
  //functional component takes in props
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>{" "}
      {/*The prop that this takes in called title will be inside of the h1 also style will be defined in a variable called headerStyle */}
    </div>
  );
};

const headerStyle = {
  // this is the variable where the style lives for this h1
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header; //send it
