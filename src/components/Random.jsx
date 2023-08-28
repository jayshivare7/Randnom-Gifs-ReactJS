import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from "axios";
import Loader from "./Loader";

export default function Random() {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageS, setImageS] = useState('');

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=3MPwfTYP9Rfye4jgqh7f9bIWjeRLKtow`;
    const output = await axios.get(url);
    const imageSource = output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);

    setImageS(imageSource); // Update the imageS state
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(imageS);
    toast.success("Copied to Clipboard");
  }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl mt-2 underline uppercase font-bold'>A Random GIF</h1>
      {loading === true ? (<Loader />) : (<img src={gif} width="450" alt="" />)}
      <button className='bg-pink-300 py-2 px-2 border border-red-400 rounded-md' onClick={handleCopy}>Copy Link</button>
      <button onClick={clickHandler} className='w-9/12 bg-yellow-100 text-lg rounded-lg py-2 mb-4'>Generate</button>
    </div>
  );
}
