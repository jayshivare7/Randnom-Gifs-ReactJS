import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
<div className="w-full  flex flex-col background">
<h1 className="bg-white rounded-lg text-center mt-[25px] ml-[25px] mr-[25px] text-3xl font-bold py-3"> Random GIFs</h1>
<div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
<Random/>
<Tag/>
</div>


</div>
  );
}
