import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFetch } from './hooks/useFetch';

type Repository = {
  id: 'Number';
  full_name: 'string';
  description: 'string';

}
function App() {
const { data: repositories, isFetch } = useFetch<Repository[]>('https://api.github.com/users/diego3g/repos')




  return (
    <div className="App">
<ul>
  {isFetch && <p>Carregando...</p>}
  {repositories?.map(repo => (
    <li key={repo.id}>
     
      <strong>{repo.full_name}</strong>
      <p>{repo.description}</p>
    </li>
  ))}
</ul>
    </div>
  )
}

export default App
