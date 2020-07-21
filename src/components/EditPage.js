import React from "react";

const EditPage = (props) => {
  return <div>Editing expense with id of {props.match.params.id}</div>;
};
export default EditPage;
