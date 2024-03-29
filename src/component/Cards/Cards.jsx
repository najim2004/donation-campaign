import { useEffect, useState } from "react";
import Card from "../Card/Card";
import useDonation from "../../CustomHooks/useDonation";


const Cards = () => {
    const {data , loading } = useDonation();
    
    // console.log(cards);
    return (
        <div className="grid grid-cols-1 mb-[100px] lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto">
            {
            data.map((card) =><Card key={card.id} card={card}></Card> )
            }
        </div>
    );
};

export default Cards;