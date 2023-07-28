import React from 'react'
import Random from './components/Random';
import Tag from './components/Tag';
function App() {
  return (
    <div className='w-full h-fit flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold '>RONDOM GIFS</h1>
      <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App