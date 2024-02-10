import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Path from "./components/Path";

function App() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Path />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Button>Buy Now</Button>
        </Card.Body>
      </Card>
      <h1>Hello Khalil</h1>
    </div>
  );
}

export default App;
