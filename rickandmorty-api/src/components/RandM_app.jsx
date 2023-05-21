import React, { useEffect, useState } from 'react';
import Location from './Location';
import Resident from './Resident';
import '../RandM.css';
const RandM_app = () => {
    const [location, setLocation] = useState({});

    const getLocation = async () => {
        let locationRdn = Math.floor(Math.random() * 126 + 1)
        const response = await fetch(`https://rickandmortyapi.com/api/location/${locationRdn}`);
        const data = await response.json();
        setLocation(data);
         
    };

    useEffect(() => {
        getLocation();
       
    }, [])
    const [searchValue, setSearchValue] = useState('');

    const getSearchLocation = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${searchValue}`);
        const data = await response.json();
        setLocation(data);
        setSearchValue('');
    }

    
    return (
        <div>
            <input type="text"  value={searchValue}  onChange={(e)=> setSearchValue(e.target.value)}/><button type="button" onClick={getSearchLocation}>Search</button>
            <Location locationInfo={location}/>
            <div className="cont">
            {location.residents?.map((resident) =>{
                return <Resident url={resident} key={resident} />
            })}
            </div>
        </div>
    );
};

export default RandM_app;