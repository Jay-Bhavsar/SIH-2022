import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Homepage() {
  const history =useHistory()
  return (
      <>
    <div>homepage</div>
    <button type="button" class="btn btn-primary" onClick={()=>history.push("/login")}>Logout</button>
    </> 
    
  )
}
