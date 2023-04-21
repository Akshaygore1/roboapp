import React from "react"

function Card({ img, name, number, email }) {
  return (
    <div className="card" style={{ margin: "10px" }}>
      <img src={img} width={"315px"} height={"238px"} className="card-img" />
      <h3 className="card-header">{name}</h3>
      <div className="contacts">
        <h4>{number}</h4>
        <h4>{email}</h4>
      </div>
    </div>
  )
}

export default Card
