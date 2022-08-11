
import React from "react"

export default function Card(props) {

  let badgeText
  if(props.card.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.card.coverImg} className="card--image" alt="Katie Zaferes"/>
      <div className="card--stats">
        <img src="./images/star.png" alt="star" className="card--star"/>
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount}) • </span> 
        <span className="gray">{props.card.location}</span>  
      </div>
      <p className="card--title" >{props.card.title}</p>
      <p className="card-- price" ><span className="bold">From ${props.card.price}</span> / person</p>
    </div>
  );
}
