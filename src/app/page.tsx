'use client'

import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { Footer, Main } from '@luxfi/ui'

import siteDef from '../site-def'

const Home = () => {
  return (<>
    <Main className='h-screen -mt-[44px] md:-mt-[80px]'>
      <ApplyTypography className='flex flex-col gap-8 m-auto text-center'>
        <h1>MEMBER LOGIN</h1>
        <div className='flex flex-col gap-4 max-w-[40rem] mx-auto'>
          <h5>Connect your wallet to access Lux Safe.</h5>
          <p className='text-muted-foreground'>Web3 wallet integration coming soon.</p>
        </div>
      </ApplyTypography>
    </Main>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Home
