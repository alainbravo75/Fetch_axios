import { useQuery } from 'react-query';
import axios from 'axios';

type Repository = {
  id: 'Number';
  full_name: 'string';
  description: 'string';

}
function App() {
const { data, isFetching } = useQuery<Repository[]>('repos', async() => {
  const response = await axios.get('https://api.github.com/users/diego3g/repos')
  return response.data;
})



  return (
    <div className="App">
<ul>
  {isFetching && <p>Carregando...</p>}
  {data?.map(repo => (
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
