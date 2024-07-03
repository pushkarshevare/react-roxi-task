import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import { useEffect, useState } from 'react';
import Barchart from './component/BarChart/Barchart';
import Alldata from './component/AllData/Alldata';
import PieChart from './component/PieChart/PieChart';

function App() {
    const [data, setdata] = useState([])
    useEffect(() => {
      
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setdata(data))
    .catch(err => console.error(err));
     }, [])

     const roter = createBrowserRouter([
      {
        path:'/',
        element: <><Navbar/><Alldata data={data}/></>
      },
      {
        path:'/pie',
        element: <><Navbar/><PieChart data={data} /></>
      },
      {
        path:'/bar',
        element: <><Navbar/><Barchart chartData={data}/></>
      }
     ])
  

  return (
    <>   
      <RouterProvider router={roter} />
    </>
  )
}

export default App
