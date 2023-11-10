
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomPost = () => {
    const [postData, setPostData] = useState(null);
    const [error, setError] = useState(null);

    // Hata yönetimi için try-catch bloğu
    useEffect(() => {
        const fetchData = async () => {
            try {
                // axios kütüphanesi ile API'den veri çekiyoruz.
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setPostData(response.data);
            } catch (error) {
                // Hata durumunda, kullanıcıya hata mesajı gösteriyoruz.

                setError('Something went wrong');
            }
        };

        fetchData();
    }, []);

    if (error) return <div>{error}</div>;
    if (!postData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Random Post</h2>
            <p>{postData.title}</p>
            <p>{postData.body}</p>
        </div>
    );
};

export default RandomPost;
