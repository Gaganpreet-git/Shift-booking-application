import "./App.css";
import Button from "./components/Button";
import { ReactComponent as SpinnerGreen } from "./assets/spinner_green.svg";
import ListItem from "./components/ListItem";
function App() {
  return (
    <div className="App">
      {/* <Button>
        {" "}
        <SpinnerGreen className="spinner-green" />
      </Button>
      <Button>Cancel</Button>
      <Button disabled>Cancel</Button>
      <Button danger>Cancel</Button>
      <Button
        danger
        disabled
        onClick={() => {
          console.log("clicked");
        }}
      >
        Cancel
      </Button> */}
      <ListItem
        startDate={"12:00"}
        endDate={"14:00"}
        isBooked={true}
        area={"Turku"}
      ></ListItem>
      <ListItem
        startDate={"12:00"}
        endDate={"14:00"}
        isBooked={false}
        area={"Turku"}
      ></ListItem>
      <ListItem
        startDate={"12:00"}
        endDate={"14:00"}
        isBooked={true}
        hideStatus
        // area={"Turku"}
      ></ListItem>
    </div>
  );
}

export default App;
