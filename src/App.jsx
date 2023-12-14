import { SqueresProvider } from "./Components/SqueresContext";
import "./App.scss";
import Squeres from "./Components/Squeres";
import Button from "./Components/Button";

function App() {
  return (
    <SqueresProvider>
      <div className="App">
        <header className="App-header">
          <Squeres />
          <Button />
        </header>
      </div>
    </SqueresProvider>
  );
}

export default App;
