import Totalbalance from '@/components/Totalbalance';
import Headerbox from '@/components/ui/Headerbox'
import React from 'react'

function home() {
  const loggedIn={firstName: 'Umair'};
  return (
    
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <Headerbox
          type="greeting"
          title= "welcome"
          user={loggedIn?.firstName||"Guests"}
          subtext="Access and manage your account  and transactions efficiently"
          />
          <Totalbalance
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={125980}
          />
        </header>
      </div>
    </section>
  )
}

export default home