import { useState } from "react";
import "./App.css";
import imagen1 from "./img/MicrosoftTeams-image.png";
import Charecters from "./components/Charecters";
function App() {

  const [personajes, setPersonajes] = useState(null);
  const apirec = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    console.log(api);

    const personajesApi = await api.json();
    console.log(personajesApi);
    
    console.log(personajes);
    setPersonajes(personajesApi.results);
    console.log(personajes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Ricky and Morty</h1>
        {personajes ? (
          <Charecters charecters={personajes}></Charecters>
        ): (
          <>
          <img src={imagen1} alt="Rick and Morty" className="img-home"></img>
          <button onClick={apirec} className="btn-search">Buscar personajes.</button>
          </>
        )
        }
      </header>{" "}
    </div>
  );
}

export default App;
