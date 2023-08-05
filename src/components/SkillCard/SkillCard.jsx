import React from "react";
import "./skillCard.css";

const SkillCard = ({ img, title, subTitle }) => {
  return (
    <div className="app__skillCard">
      <div className="app__skillCard-icon">
        <div className="app__skillCard-icon-circle">
          <img src={img} alt="" />
        </div>

        <h1 className="card__h1"> {title} </h1>
        <p className="card__p">{subTitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;
