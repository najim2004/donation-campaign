
import { useParams } from 'react-router-dom';
import useDonation from '../../CustomHooks/useDonation';
import { useEffect, useState, useSyncExternalStore } from 'react';

const CardDetails = () => {
    const { id } = useParams({});
    const [item , setItem]= useState();
    const {data , loading } = useDonation();
    useEffect(()=>{
        const findItem = data.find(item => item.id === +id);
        setItem(findItem);
    },[data, id])
    console.log( data,item);


    return (
        <div className='max-w-[1320px] mx-auto mt-12'>
            <div className="w-[1320px] h-[500px] rounded-lg">
                <img className='h-full w-full rounded-lg' src={item?.picture} alt="" />
            </div>
        </div>
    );
};

export default CardDetails;