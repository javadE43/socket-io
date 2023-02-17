

import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';


interface Props{
  coin:Coins
}


const CoinItem:React.FC<Props> = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);


  return (
    <tr className='h-[80px] border-b overflow-hidden'>
    <td>
      {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
    </td>
    <td>{coin.slug.toUpperCase()}</td>
    <td>
      <Link to={`/coin/${coin.id}`}>
        <div className='flex items-center'>
          <img
            className='w-6 mr-2 rounded-full'
            src=''
            alt={coin.name}
          />
          <p className='hidden sm:table-cell'>{coin.name}</p>
        </div>
      </Link>
    </td>
    <td>{coin.name}</td>
    <td>${coin.price}</td>
    <td>
      {coin.price > 0 ? (
        <p className='text-green-600'>
          {coin.price.toFixed(2)}%
        </p>
      ) : (
        <p className='text-red-600'>
          {coin.price.toFixed(2)}%
        </p>
      )}
    </td>
    <td className='w-[180px] hidden md:table-cell'>
      {/* ${coin.slug.toLocaleString()} */}
    </td>
    <td className='w-[180px] hidden sm:table-cell'>
      {/* ${coin.name} */}
    </td>
    <td>
      <Sparklines data={[coin.price]}>
        <SparklinesLine color='teal' />
      </Sparklines>
    </td>
  </tr>
  );
};

export default CoinItem;