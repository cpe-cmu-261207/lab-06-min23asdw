import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

type DataType = {
  bpi: any
  disclaimmer: string
  time: {
    updated: string
  }
}

const ResultHis = () => {
  const [data, setData] = useState<DataType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const query = new URLSearchParams(useLocation().search)
  const startDate = query.get('start')
  const endDate = query.get('end')

  const fetchData = async () => {
    try {
      const resp = await axios.get<DataType>(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${startDate}&end=${endDate}`)
      // console.dir(resp.data)
      setData(resp.data)
      setLoading(false)
      setError(false)
    }
    catch (err) {
      console.log(err)
      setError(true)
    }
  }

  const list = () => {

    const temp = []
    for (const [key, value] of Object.entries(data?.bpi)) {
      temp.push(key + ' - ' + value)
    }
    const final = temp.map(x => <li>{x}</li>)
    return final
  }

  useEffect(() => {
    fetchData()
  }, [])

  const render = () => {
    if (error) {
      return (
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>There was an error. Please try again later.</p>
        </div>
      )
    }
    else if (loading) {
      return (
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Loading ...</p>
        </div>
      )
    }
    else {
      return (
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-xl font-semibold'> ( From {startDate} To {endDate})</p>
          <ul>
            {list()}
          </ul>
        </div>
      )
    }
  }
  return (
    <div>
      {render()}
    </div>
  )
}

export default ResultHis
