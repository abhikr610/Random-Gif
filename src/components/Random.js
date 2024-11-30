import React, { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  const {gif, loading, fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center justify-center gap-y-5 mt-[15px]">

      <h1 className="mt-[15px] text-2xl underline text-center uppercase font-bold">
        A Random Gif
      </h1>

      {/* Only display the image if there's a gif */}
      {
        loading ? (<Spinner/>): (<img src={gif} width="450" />)
      }

      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-500 mb-[20px] items-center text-lg py-2 rounded-lg">
        Generate
      </button>
    </div>
  );
}

export default Random;
