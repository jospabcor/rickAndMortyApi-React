import React, { useEffect, useState } from 'react';

const Resident = ({url}) => {
    const [character, setCharacter] = useState({});

    const getResident = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCharacter(data);
    }
    useEffect(() => {
        getResident();
    },[])
    
    const residentStatus = () =>{
        if(character.status === 'Alive'){
            return 'green';
        } else if(character.status === 'Dead'){
            return 'red';
        } else {
            return 'grey';
        }
    }


    return (
        <div>
            <img src={character.image} alt={character.name}/>
            <p><strong>Name: </strong>{character.name}</p>
            <div className='statusContainer'>
                <div className='status' style={{backgroundColor: residentStatus()}}></div>
                <p>{character.status}</p>
            </div>
            <p><strong>Species: </strong>{character.species}</p>
            <p><strong>Location: </strong>{character.origin?.name}</p>
            <p><strong>Number of episodes: </strong>{character.episode?.length}</p>
        </div>
    );
};

export default Resident;