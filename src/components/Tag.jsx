import React from 'react'
import Spinner from './Spinner'
import { useEffect,useState } from 'react';
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
    const [gif,setGif]=useState('');
  const [loding,setLoding]=useState(false);
  const [tag,setTag]=useState('');

  async function fetchData(){
    setLoding(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    let {data}=await axios.get(url);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoding(false);
  }
  useEffect (()=>{
    fetchData();
  },[])
  function clickHandler(){
    fetchData();
  }
  function changeHandler(event){
     setTag(event.target.value);
  }
  return (
   
   <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loding?(<Spinner/>):(<img src={gif} width={450}/>)
      }
      <input className=' w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} vlaue={tag}/>
      
      <button onClick={clickHandler} className='w-10/12 bg-slate-300 text-lg py-2 rounded-lg mb-[20px]'>
        Genrate
      </button>
    </div>
    
  )
}

export default Tag