import React, {useContext}     from 'react'
import UserContext from '../context/usercontext'

function profile() {
    const { user } = React.useContext(UserContext)

    if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
     <h1>profile : {user.username}</h1>

    </div>
  )
}

export default profile