import './App.css';
import {familyTree} from "./familyTree";
import {Family} from "./Family";

function App() {
  return (
    <div>
      <Family familyTree={familyTree}></Family>
    </div>
  );
}

export default App;
