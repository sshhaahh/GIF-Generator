
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY=process.env.REACT_APP_GIPPY_API_KEY;


const Tags = () => {
    const[tag,setTag]=useState("random");
    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState(false);
    const[failed,setFailed]=useState('');


    async function fetchData(){
        try{
        setLoading(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        console.log(tag)
        const {data}= await axios.get(url);
        setLoading(false)
        const imageUrl=data.data.images.downsized_large.url;
        setGif(imageUrl);
        }catch(e){
            setLoading(false);
            setFailed("Limit Exceeded");
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    function generateHandler(){
        fetchData();
    }
  return (
    <div className='bg-blue-300 border border-black rounded-lg w-[60vw] mt-4 flex flex-col items-center shadow-lg gap-y-3'> 
        <h1 className=' rounded-lg  w-[20vw] text-center text-xl font-bold pt-2 underline'>Generate Gif</h1>
        {loading?(<Spinner/>):(<img src={gif} alt={failed} className=' text-center border shadow-lg rounded-lg w-[30vw] h-[50vh]' />)}
        <input
            onChange={(e)=>{setTag(e.target.value)}}
            placeholder='Enter tag'
            className='w-3/4 rounded-lg font-semibold text-lg px-3 py-2 text-center'
            
        ></input>
        <button onClick={generateHandler} className='bg-blue-200 rounded-lg py-2 w-3/4 mb-4 font-semibold text-lg shadow-lg cursor-pointer'>Generate</button>
    </div>
  )
}

export default Tags