import './cu.css'

function Perso ({personaje}){
    return (
        <div className="list">
            <h3>{personaje.name}</h3>
            <img src={personaje.image} alt="" />
            <i>{personaje.origin.name}</i>
        </div>
    )
}
export default Perso