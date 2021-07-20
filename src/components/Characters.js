import React, {useState, useEffect} from 'react'

const Characters = ({ubicacion}) => {

    const [character, setCharacter] = useState([])

    function getCharacter() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div className="container">
            <div className="characters">
                {
                    character.map( caracter => (
                        <div className="box" key={caracter.id}>
                            <img src={caracter.image} alt={caracter.name}/>
                            <div className="character">
                                <h3 className="name">{caracter.name}</h3>
                                <p className="specie">{caracter.species}</p>
                                <p className="status">{caracter.status}</p>
                                <p className="ubi">{ubicacion}</p>
                                {/* <div className="location">{
                                    location.map( ubicacion => (
                                        <div className="box2" key={ubicacion.id === caracter.id ? <p className="loc">{ubicacion.name}</p> : console.log("No se encontro nada")}>
                                            
                                        </div>
                                    ))
                                }</div> */}
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Characters