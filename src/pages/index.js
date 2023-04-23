import Image from 'next/image'
import { useEffect } from 'react';
import React from 'react';

export default function Home() {


  useEffect(() => {
    
  const spotlight = document.getElementById("spotlight");
  const spotlight_child = document.getElementById("spotlight-child");
  const main = document.getElementById("main");
  main.addEventListener("mousemove", moveSpotlight);
  main.addEventListener("touchmove", moveSpotlight);
  function moveSpotlight (e) {
    let pos, x, y;
    e.preventDefault();
    x = e.clientX - 200;
    y = e.clientY - 350;
    spotlight.style.left = x + "px";
    spotlight.style.top = y + "px";
    spotlight_child.style.left = x + "px";
    spotlight_child.style.top = y + "px";
  }
})




  return (
   <>
   <main className="min-h-screen ">
    <div className='header'>
      <Image src="/logo-dark.svg" width={160} height={80} className=" mx-9 mt-4 h-20 "/>
    </div>
    <div className='main-content-section w-3/5 text-center m-auto relative'>
      <div className='middleware font-bold '>
        <div className='child-1 text-center rounded-3xl w-fit m-auto'>
        <h1 className='flex rounded-2xl p-p20 mix-blend-darken bg-mainBg text-white leaading-160'>100<span>x</span></h1>
        </div>
        <p className='child-2 text-68 text-white mt-8'>your release process</p>
      </div>
   


  
    </div>
      <div className="cursor-box" id="spotlight">
    <div className="cursor-box-child " id="spotlight-child"></div>
  </div>
  <div className='highlighted_spotlight fixed top-0 left-0 w-screen h-screen main' id="main">
       <div className='highlighted_spotlight_child w-full h-full '>
       <h2 className=' text-600 text-white bg-mainBg font-bold leading-450'>LIVEOPS</h2>
       <video controls autoPlay style={{ width: '500px', height: '500px' }} src="/gradient.mp4" />

    
       </div>
      </div>
  

   </main>


   </>
  )
}
