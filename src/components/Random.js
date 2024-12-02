import React, { useState } from 'react'

const Random = () => {
    const[gif,setGif]=useState('');
  return (
    <div className='bg-[#7eeb7c] rounded-lg w-[40vw] mt-10 flex flex-col items-center shadow-lg'> 
        <h1 className='bg-white rounded-lg my-3 w-[20vw] text-center text-xl font-bold py-2 shadow-lg'>Random Gif</h1>
        <img src={gif} />
        <button type="button" class="text-white bg-gradient-to-r from-green-40