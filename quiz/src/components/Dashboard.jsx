import React from 'react'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import "./styles.css"   
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <SideMenu/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
