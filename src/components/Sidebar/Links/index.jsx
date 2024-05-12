import React from "react";

const itmes = ["Home", "Services", "Portfolio", "Contact", "About"];

const Links = () => {
  return (
    <div className="links">
      {itmes.map((item) => (
        <a href={`#${item}`}>{item}</a>
      ))}
    </div>
  );
};

export default Links;
