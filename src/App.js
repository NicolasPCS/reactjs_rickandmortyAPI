import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.sass'
// import Locations from './components/Locations'
// import './components/Header.css'

const App = () => {

    const [location, setLocation] = useState([])

    function getLocation() {
        fetch('https://rickandmortyapi.com/api/location')
            .then(res => res.json())
            .then(data => setLocation(data.results))
    }

    useEffect(() => {
        getLocation()
    }, [])

    return ( 
        <Fragment>
            <Header
                title="Rick and Morty API"
            />
            <Characters
                location={location.map( ubi => (
                    ubi.id
                ))}
            />
        </Fragment>
     );
}
 
export default App;