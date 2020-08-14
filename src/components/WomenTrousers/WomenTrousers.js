import React, { useEffect, useState } from 'react';
import TrouserList from '../TrouserList/TrouserList'
import SearchBox from '../SearchBox/SearchBox'

function WomenTrousers() {
  const [trousers, setTrousers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/women/trousers', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setTrousers(res)
      })
  }, [])

  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <TrouserList search={search} trousers={trousers} setTrousers={setTrousers} />
    </div>
  )
}

export default WomenTrousers