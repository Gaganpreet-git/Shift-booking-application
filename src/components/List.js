import React from "react";
import ListItem from "./ListItem";
import "../styles/List.css";

const List = ({
  extendedHeader,
  data,
  handleBookShift,
  handleCancelShift,
  date,
}) => {
  const dateConverter = (unixTime) => {
    const date = new Date(unixTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // console.log(date.getFullYear());
    const format = hours + ":" + minutes;
    return format;
  };

  return (
    <div className="list">
      <header className="list-header">
        <span className="list_date">{date}</span>
        {extendedHeader && (
          <span className="list_details">
            {data.length + " shifts"} "4" "h"
          </span>
        )}
      </header>
      <div className="list-items">
        {data.map((item) => {
          return (
            <ListItem
              key={item.id}
              startDate={dateConverter(item.startTime)}
              endDate={dateConverter(item.endTime)}
              area={item.area}
              isBooked={item.booked}
              onClick={item.booked ? handleCancelShift : handleBookShift}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
