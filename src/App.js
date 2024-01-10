import "./App.css";
import Button from "./components/Button";
import { ReactComponent as SpinnerGreen } from "./assets/spinner_green.svg";
import ListItem from "./components/ListItem";
import List from "./components/List";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [groupedByDate, setGroupedByDate] = useState({});

  const groupByDate = (data) => {
    console.log(data);
    return data.reduce((acc, shift) => {
      const date = new Date(shift.startTime).toDateString();

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(shift);
      return acc;
    }, {});
  };

  // console.log(groupedByDate);

  const api = "http://localhost:8080";

  const bookShift = async (id) => {
    const req_url = `${api}/shifts/${id}/book`;
    const res = await fetch(req_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return;
  };
  const cancelShift = async (id) => {
    const req_url = `${api}/shifts/${id}/cancel`;
    const res = await fetch(req_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return;
  };

  const fetchData = async (endpoint) => {
    const req_url = `${api}/${endpoint}`;
    const data = await fetch(req_url);
    return data;
  };

  useEffect(() => {
    const shifts = fetchData("shifts");
    shifts
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setData(json);
      })
      .then(() => {
        console.log(data);
        // setGroupedByDate(groupByDate(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setGroupedByDate(groupByDate(data));
  }, [data]);

  // console.log(data);
  console.log(groupedByDate);

  const filterByArea = (area) => {
    const filteredData = data.filter((shift) => {
      return shift.area === area;
    });

    return filterByArea;
  };

  const filterBookedShifts = (data) => {
    const filteredData = data.filter((shift) => {
      return shift.booked;
    });
  };
  const render = [];
  for (const key in groupedByDate) {
    render.push(
      <List
        date={key}
        data={groupedByDate[key]}
        handleBookShift={bookShift}
        handleCancelShift={cancelShift}
      />
    );
  }

  // console.log(render);
  return <div className="App">{render}</div>;
}

export default App;
