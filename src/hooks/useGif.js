import axios from 'axios';
import  { useEffect, useState } from 'react'

const API_KEY=process.env.REACT_APP_GIPPY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGif = (tag) => {
    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState(false);
    const[failed,setFailed]=useState('');
    async function fetchData(tag){
        try{
        setLoading(true)
        const {data}= await axios.get(tag?`${url}&tag=${tag}`:url);
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

    return {fetchData,gif,failed,loading};
}


export default useGif