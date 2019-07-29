import React from "react";

export default function Card(props) {
  let classes = ["card"];
  if (props.classes) {
    classes = classes.concat(props.classes.split(" "));
  }
  return (
    <section className={classes.join(" ")} id={props.id}>
      {props.children}
    </section>
  );
}
