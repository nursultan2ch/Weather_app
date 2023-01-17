import React from 'react'
import Image from 'next/legacy/image'

const Spinner = () => {
  return (
    <>
      <Image className='w=[200px] m-auto block' src="/public/Snake.gif" alt='loading..' height={100} width={100}/>
    </>
  )
}

export default Spinner
