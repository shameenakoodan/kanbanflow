import React from 'react'
import "./ProjectTasks.scss";
const ProjectTasks = () => {
  const createNewColumn=()=>{
    alert("Create a new Column");
  }
  const createNewTask=()=>{
    alert("Create New Task");
  }
  return (
    <div  className="content" >
        <div className='navigation'>
          <div className='heading'>PlatForm Launch</div>
          <div className='add-button'>
            <input type='submit' value={"+Add New Task"} className='new-task-button' onClick={createNewTask}/>
          </div>
        </div>
        <div className='tasklist'>
            <input type='submit' value={"+ New Column"} className='new-column-button' onClick={createNewColumn}/>
        </div>
    </div>
  )
}

export default ProjectTasks
