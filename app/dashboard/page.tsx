import React from 'react'
import BalanceView from '@/components/BalanceView' 
import Piecharts from '@/components/Piecharts' 

const page = () => {
  return (
    <div className='pl-5'>
      <p className='font-bold text-xl pt-5'>Dashboard</p>

    <BalanceView />
   <Piecharts />
    </div>
  )
}

export default page
