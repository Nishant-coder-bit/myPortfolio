import { useEffect, useState } from "react";


function App() {
   const [data, setData] = useState([]);
   async function getData(){
      const response = await fetch('https://my-portfolio-one-omega-68.vercel.app/');
         console.log(response);
         const data = await response.json();
         setData(data.message);
      //  setData();
   }
   useEffect(()=>{
      getData();
   },[]);
 return  (
    <>
       <h1>{data}</h1>
       My Portfolio
    </>
  )
}

export default App
