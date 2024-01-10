import React from "react";
import Button from "./Button";
import "../styles/ListItem.css";

const ListItem = ({
  startDate,
  endDate,
  area,
  isBooked,
  hideStatus,
  onClick,
}) => {
  let isOverlapped = false;
  return (
    <div className="list-item">
      <div>
        <div className="list-item_date">
          <span className="list-item_start-date">{startDate}</span>-
          <span className="list-item_end-date">{endDate}</span>
        </div>
        <div className="list-item_area">{area}</div>
      </div>
      <div className="list-item_right-container">
        <div
          className={`list-item_status ${isOverlapped ? "overlapped" : ""} `}
        >
          {!hideStatus && isBooked
            ? "Booked"
            : isOverlapped
            ? "overlapped"
            : ""}
        </div>
        <Button onClick={onClick} disabled={isOverlapped} danger={isBooked}>
          {isBooked ? "Cancel" : "Book"}
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
