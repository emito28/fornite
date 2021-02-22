import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div>
      <img src={props.img} alt="pro" />
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string,
};

export default Item;
