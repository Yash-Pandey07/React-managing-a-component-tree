import React, { useState } from "react";

function ToDoItems(props) {
  //const [done, setDone] = useState(false);

//   function changeStatus() {
//     //setDone(done === false ? true : false);
//     setDone((prevValue) => {
//       return !prevValue;
//     });
//   }
  // return (                     passing this t main functon call
  // <li onClick={changeStatus}
  //     style={{ textDecoration: done ? "line-through" : "none" }}
  // >{props.text}</li>)

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItems;
