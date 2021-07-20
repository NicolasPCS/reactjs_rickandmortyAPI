import React, {useState, useEffect} from 'react';

const Locations = () => {

    const [location, setLocation] = useState([])
    
    useEffect(() => {
        
        fetch('https://rickandmortyapi.com/api/location')
            .then(res => res.json())
            .then(data => setLocation(data.results))

    }, [])

    return ( 
        <div className="container">
            <div className="locations">
                {
                    location.map( item=> (
                        <div className="box" key={item.id}>
                            <div className="location">
                                <p>{item.name}</p>
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Locations;