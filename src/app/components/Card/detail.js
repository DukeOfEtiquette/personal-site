import React from "react";

export default function CardDetail(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      {props.children}
    </article>
  );
}
