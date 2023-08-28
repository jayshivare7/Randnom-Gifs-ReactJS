import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Loader from "./Loader";
export default function Tag() {
  const [tag, setTag] = useState("");
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageS, setImageS] = useState("");
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=3MPwfTYP9Rfye4jgqh7f9bIWjeRLKtow&tag=${tag}`;
    const output = await axios.get(url);
    const imageSource = output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);

    setImageS(imageSource); // Update the imageS state
  }
  useEffect(() => {
    fetchData();
  }, []);

function clickHandler(){
fetchData();
}

  function handleCopy() {
    navigator.clipboard.writeText(imageS);
    toast.success("Copied to Clipboard");
  }
  function changleHandler(event) {
 setTag(event.target.value);
  }

  return (
    <div className=" w-1/2 bg-blue-300 flex flex-col items-center rounded-lg border mb-8 border-black gap-y-5 mt-[15px]">
      <h1 className="font-bold underline text-2xl mt-2 uppercase ">
        Random {tag} GIF
      </h1>
      {loading === true ? <Loader /> : <img src={gif} width="450" alt="" />}
      <input
        type="text"
        placeholder="Search For Gif"
        id="searchTxt" 
        value={tag}
        onChange={changleHandler}
        className="border border-black rounded-md w-10/12 text-center text-lg mb-[3px] text-blue-900 py-2 "
      />
      <button
        className="bg-pink-300 py-2 px-2 border border-red-400 rounded-md"
        onClick={handleCopy}
      >
        Copy Link
      </button>
      <button
        onClick={clickHandler} 
        className="w-9/12 bg-yellow-100 text-lg rounded-lg py-2 mb-4"
      >
        Generate
      </button>
    </div>
  );
}
