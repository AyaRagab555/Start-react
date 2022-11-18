import RoutLayout from "./Components/RoutLayout/RoutLayout.jsx";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Contant from "./Components/Contant/Contant.jsx";
import Protifolio from "./Components/Protifolio/Protifolio.jsx";


function App() {
  const Routers = createBrowserRouter([
    {path:"/" , element: <RoutLayout/>,errorElement:<ErrorPage/> , children: [
      {index:true , element: <Home/>},
      {path: "about" , element: <About/> },
      {path: "contant" , element: <Contant/> },
      {path: "protifolio" , element: <Protifolio/> }
    ]}
  ])
  return <>
    <RouterProvider router={Routers} />
  </>
  
 
}

export default App;
