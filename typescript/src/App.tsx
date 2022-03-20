import { Routes, Route } from "react-router-dom";
import { Repos } from "./services/pages/Repos";
import { Repo } from "./services/pages/Repo";
export function App(){
  return(

    <Routes>
      <Route path='/' element={<Repos/>}></Route>
      <Route path='/repos/*' element={<Repo/>}></Route>
    </Routes>

  )
}