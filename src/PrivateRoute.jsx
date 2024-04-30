import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const token = sessionStorage.getItem('userToken')
    let auth = {}
    if(token){
        auth = {'token':true}
    }
    else{
        auth ={'token':false}
    }
  return (
   auth.token? children:<Navigate to = '/login' />
  )
}

export default PrivateRoute