import { React } from 'react';
import { Link } from 'react-router-dom';

function List({ data, errorMsg }) {

    return(
    <div className="business-list">
        <h1>Places Page</h1>
        {data ? <table>
            <thead>
                <tr>
                    <th>Business ID</th>
                    <th>Business Name</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data.map((elem) =>
                    <tr key={elem.id}>
                        <td>{elem.id}</td>
                        <td><Link to={`/places/${elem.id}`}>{elem.name}</Link></td>
                        <td>{elem.website_url}</td>
                        <td>{elem.address}</td>
                    </tr>
                )}
            </tbody>
        </table> : 
            <div>
                <div>Loading Data...</div>
                <div>{ errorMsg }</div>
            </div>
        }
    </div>);
}

export default List;