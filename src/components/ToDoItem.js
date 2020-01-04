import React from "react";
import PropTypes from "prop-types";

function ToDoItem({ item, onDelete }) {
  return (
    <li>
      {item}
      <button onClick={onDelete} type="button">
        x
      </button>
    </li>
  );
}

ToDoItem.defaultProps = {
  item: ""
};

ToDoItem.propTypes = {
  item: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default ToDoItem;
