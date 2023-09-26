import React from 'react'
import SideBar from '../SideBar/SideBar'
import ProjectTasks from '../ProjectTasks/ProjectTasks'
import "./MainContainer.scss";
const MainContainer = () => {
  return (
    <div className='main'>
        <SideBar />
        <ProjectTasks/>
    </div>
  )
}

export default MainContainer
