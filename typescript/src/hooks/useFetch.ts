import { useEffect, useState } from 'react'
import axios from 'axios';

export function useFetch<T= unknown>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [isFetch, setIsFetch] = useState(true)

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setData(response.data);
    })
    .finally(() => {
        setIsFetch(false)
    })
  }, [])
  return { data, isFetch }
}