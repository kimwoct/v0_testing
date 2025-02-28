import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const YourComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data: yourData, error } = await supabase
                .from('your_table_name')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setData(yourData);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Your Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li> // Adjust according to your data structure
                ))}
            </ul>
        </div>
    );
};

export default YourComponent; 