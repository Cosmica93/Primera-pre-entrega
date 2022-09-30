import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/NavBar/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= "tienda astro" />
    </div>
  );
}

export default App;
