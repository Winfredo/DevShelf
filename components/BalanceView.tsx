import React from 'react'

const BalanceView = () => {
 const value = [
  {
    header: 'Balance',
    amount: '$5,000',
    color: 'black'
  },
  {
    header: 'Income',
    amount: '$10,000',
    color: 'green'
  },
   {
    header: 'Expenses',
    amount: '$1,530',
     color: 'red'
  }
]
  return (
       <div className='flex gap-20 mt-5'>
        {value.map((item, index) => (
          <div 
            key={index} 
            className='w-[25%] h-[170px] bg-[#FCFBFC] flex flex-col justify-center items-center rounded-lg shadow-lg p-4'
          >
            <h3 className='text-black text-[20px] font-semibold mb-2'>
              {item.header}
            </h3>
            <p className='text-black text-[25px] font-bold' style= {{color: item.color}}>
              {item.amount}
            </p>
          </div>
        ))}
      </div>
  )
}

export default BalanceView
