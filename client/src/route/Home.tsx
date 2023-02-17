import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

interface Params{
    coins:Coins[]
}

const Home:React.FC<Params> = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}

export default Home