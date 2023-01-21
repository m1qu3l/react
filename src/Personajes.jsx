import Perso  from "./cadaPerso";
import { useEffect, useState } from "react";

function Nav ({page, setPage}){
    return (
        <header>
            <h4>pagina {page}</h4>
            <nav>
                <b onClick={()=> page <= 1 ? setPage(42) : setPage(page - 1)}>previos page</b>
                <b onClick={()=> page >= 42 ? setPage(1) : setPage(page + 1)}>next page</b>
            </nav>
        </header>
    )
}

function PersonajesContainer () {
  const [personajes, setPersonajes] = useState([]);
  const [isLogin, setIsLogin] = useState(true)

  const [page, setPage] = useState(1);

  useEffect(() => {
    const res = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character?page='+page),
        json = await res.json();

      setPersonajes(json.results);
      setIsLogin(false)
    };
    res();
  }, [page]);

  return (
    <div>
        <Nav page={page} setPage={setPage} />
        <div className="conte">
            {
                isLogin ? <div>login</div> : personajes.map((personaje) => { return (
                    <Perso key={personaje.id} personaje={personaje}/>
                )})
            }
        </div>
        <Nav page={page} setPage={setPage} />
        <br /><br />
    </div>
  );
};

export default PersonajesContainer