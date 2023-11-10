
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExampleRequests = () => {
    const [dataAxios, setDataAxios] = useState(null);
    const [dataFetch, setDataFetch] = useState(null);

    useEffect(() => {
        // Using axios
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => setDataAxios(response.data))
            .catch(error => console.error('Axios error:', error));

        // Using fetch
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then(response => response.json())
            .then(data => setDataFetch(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div>
            <h2>Example Requests</h2>
            <div>
                <h3>Axios Request</h3>
                {dataAxios ? <p>{dataAxios.title}</p> : <p>Loading...</p>}
            </div>
            <div>
                <h3>Fetch Request</h3>
                {dataFetch ? <p>{dataFetch.title}</p> : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default ExampleRequests;
