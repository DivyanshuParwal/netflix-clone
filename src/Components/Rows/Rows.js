import React, { Fragment } from 'react';

import requests from '../../requests';
import Row from './Row/Row';

const Rows = () => {

    const rows = requests.map(request => {
        return <Row
            key={request.type}
            title={request.type}
            fetchUrl={request.fetchUrl}
            largeRow={request.posterPath} />
    });

    return (
        <Fragment>
            {rows}
        </Fragment>
    )
}

export default Rows;
