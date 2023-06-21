import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monsters) => {
        return <Card key={monsters.id} monsters={monsters} />;
      })}
      {/* {props.children} */}
    </div>
  );
};

export default CardList;

// export const CardList = props => {
// console.log(props)

//     return (<h1>hello muavia</h1>)

// }
