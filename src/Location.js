import React from "react";

export default function Location() {
  return (
    <div className="location">
      <img
        src="../images/mount-fuji.jpg"
        alt="mount-fuji"
        className="location--img"
      />
      <span>
        {" "}
        <img src="../images/pin.png" alt="pin" className="location--pin" />
      </span>
      <span className="location--place">Japan</span>
      <span>View on Google Maps</span>
      <h1>Mount Fuji</h1>
      <p>12 Jan, 2021 - 24 Jan, 2021</p>
      <p className="location--description">
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
        (12,380 feet). Mount Fuji is the single most popular tourist site in
        Japan, for both Japanese and foreign tourists.
      </p>
      <hr />
    </div>
  );
}
