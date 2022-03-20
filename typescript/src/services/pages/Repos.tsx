import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Repository = {
  id: 'Number';
  full_name: 'string';
  description: 'string';

}
export function Repos() {
const { data, isFetching } = useQuery<Repository[]>('repos', async() => {
  const response = await axios.get('https://api.github.com/users/diego3g/repos')
  return response.data;
}, {
  //refetchOnWindowFocus: false,//vai parar de atualisar por padrão
  staleTime: 1000 * 60, // vai poder trazer uma nova requisição só depois de 1 minuto
})



  return (
    <div className="App">
<ul>
  {isFetching && <p>Carregando...</p>}
  {data?.map(repo => (
    <li key={repo.id}>
     
      <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
      <p>{repo.description}</p>
    </li>
  ))}
</ul>
    </div>
  )
}

