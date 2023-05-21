import React from 'react';

const Location = ({locationInfo}) => {
    return (
        <div>
            <h1>{locationInfo.name}</h1>
            <p><strong>Type: </strong>{locationInfo.type}</p>
            <p><strong>Dimension: </strong>{locationInfo.dimension}</p>
            <p><strong>Population: </strong>{locationInfo.residents?.length}</p>
        </div>
    );
};

export default Location;