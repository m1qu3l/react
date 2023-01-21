import PersonajesContainer from "./Personajes";
function App() {
  return (
    <div>
      <h1 className="h1">Personajes</h1>
      <PersonajesContainer />

      <Logo />
    </div>
  );
}

export function Logo(){
  return (
    <div className="logo">
      <b><span>Miquel</span></b>
    </div>
  )
}

export default App;
