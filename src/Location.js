import React from "react";

export default function Location(props) {
  return (
    <div className="location">
      <img
        src={props.location.imageUrl}
        alt="mount-fuji"
        className="location--img"
      />
      <span>
        {" "}
        <img src="../images/pin.png" alt="pin" className="location--pin" />
      </span>
      <span className="location--country">{props.location.country}</span>
      <span>
        <a
          href={props.location.googleMapsUrl}
          className="location--google"
          target="_blank"
          rel="noreferrer"
        >
          View on Google Maps
        </a>
      </span>
      <h1 className="location--place">{props.location.place}</h1>
      <p className="location--dates">
        {props.location.startDate} - {props.location.endDate}
      </p>
      <p className="location--description">{props.location.description}</p>
    </div>
  );
}
