
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    return (
        <Link to={`/card-details/${card.id}`}>
            <div className='rounded-lg pb-4' style={{ backgroundColor: card.card_bg }}>
                <div className="w-[312px] h-[194px] bg-gray-200 rounded-t-lg">
                    <img className='w-[312px] h-[194px] rounded-t-lg' src={card.picture} alt="" />
                </div>
                <div className="mt-5 flex flex-col justify-center items-start">
                    <p className='px-[10px] py-1 rounded-lg font-medium ml-4' style={{ backgroundColor: card.category_bg, color: card.text_button_bg }}>{card.category}</p>
                    <h3 className='text-xl font-semibold mt-2 ml-4' style={{ color: card.text_button_bg }}>{card.title}</h3>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;