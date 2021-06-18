import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" + imgUrl + ")", 
        height: "300px"
      }}
    >
      <div className="content">
        <h1 className="header" style={{color: "black", fontWeight: "bold"}}>{heading}</h1>
        <p className="text"
         style={{color: "black", fontWeight: "bold", fontSize: "20px"}}>{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
