import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const History = () => {

  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const hist = useHistory()

  const Getdata = () => {

    var startdate = null, enddate = null;
    if (startDate != null)
      startdate = new Date(startDate)
    if (endDate != null)
      enddate = new Date(endDate)

    if (startDate == null || endDate == null)
      alert('Please select start date and end date correctly')
    else if (startdate != null && enddate != null && startdate?.getTime() > enddate?.getTime()) {
      alert('Please select start date and end date correctly')
    }
    else
      hist.push(`./result?start=${startDate}&end=${endDate}`)
  }

  return (
    <div>
      <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => { setStartDate(e.target.value); }}></input>
        <span>To date</span>
        <input type='date' onChange={e => { setEndDate(e.target.value); }}></input>
        <br />
        <br />
        <button onClick={Getdata}>Get data</button>
      </div>
    </div>
  )
}

export default History
