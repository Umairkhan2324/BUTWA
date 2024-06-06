
import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const Totalbalance = ({
    accounts=[],totalBanks,totalCurrentBalance
}:TotalbalanceProps
) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6 '>
            <h2 className='header2'>
              Bank Accounts : {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
              <p className='total-balance-label'>
                Total Current Balance
              </p>
              <p className='total-balance-amount flex gap-2'>
               <AnimatedCounter amount={totalCurrentBalance}
               />
              </p>
            </div>
        </div>
    </section>
  )
}

export default Totalbalance