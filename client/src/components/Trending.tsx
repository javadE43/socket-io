

import React, { useState } from 'react';

const Trending:React.FC = () => {
  const [trending, setTrending] = useState([]);

// url get trending
return (
    <div className='rounded-div my-12 py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>ارز های پر طرفدار</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {trending?.map((coin, idx) => (
          <div key={idx} className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex'>
                <img
                  className='mr-4 rounded-full'
                  src="small"
                  alt='/'
                />
                <div>
                  <p className='font-bold'>Bitcoin</p>
                  <p>Bit</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-4 mr-2'
                  alt='/'
                />
                <p>400000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
