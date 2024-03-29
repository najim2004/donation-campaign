import { useEffect, useState } from 'react';

const useDonation = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        fetch('/Data.json')
            .then((res) => res.json())
            .then((data) => setData(data))

        setLoading(true);
    }, []);

    return { data, loading }
};

export default useDonation;