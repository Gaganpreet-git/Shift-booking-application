import "./App.css";
import Button from "./components/Button";
import { ReactComponent as SpinnerGreen } from "./assets/spinner_green.svg";
function App() {
  return (
    <div className="App">
      <Button>
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
      </Button>
    </div>
  );
}

export default App;
