import React, { useState } from 'react';
import CoinItem from './CoinItems';



interface Props{
  coins:Coins[]
}


const CoinSearch:React.FC<Props> = ({ coins }) => {
  const [searchText, setSearchText] = useState('');
  return  (
    <div className='rounded-div my-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>جستجو</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
            type='text'
            placeholder='Search a coin'
          />
        </form>
      </div>

      <table className='table w-full border-collapse text-center '>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>ارز</th>
            <th>قیمت</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24ساعت</th>
            <th className='hidden sm:table-cell'>کل</th>
            <th>7 روز گذاشته</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin,index) => (
              <CoinItem key={index} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;