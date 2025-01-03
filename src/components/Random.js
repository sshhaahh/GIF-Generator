import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const Random = () => {
    const{gif,fetchData,loading,failed}=useGif();
  return (
    <div className='bg-[#7eeb7c] border border-black rounded-lg w-[60vw] mt-4 flex flex-col items-center shadow-lg gap-y-3'> 
        <h1 className=' rounded-lg  w-[20vw] text-center text-xl font-bold pt-2 underline'>Random Gif</h1>
        {loading?(<Spinner/>):(<img src={gif} alt={failed} className=' text-center border shadow-lg rounded-lg w-[30vw] h-[50vh]' />)}
        <button onClick={()=>fetchData()} className='bg-green-300 rounded-lg py-2 w-3/4  mb-4 font-semibold text-lg shadow-lg cursor-pointer'>Generate</button>
    </div>
  )
}

export default Random