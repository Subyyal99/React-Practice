import {FaTimes} from 'react-icons/fa'

const Tasks = ({task, onDelete, onToggle}) => {

  return (<div>
      {task.map((t) => 
      <div className={`task ${t.reminder ? 'reminder' : ''}`} 
      key={t.id} 
      onDoubleClick={()=>onToggle(t.id)}>
      <h3 className="kam" >{t.kam}
      <FaTimes style={{justifyContent:'space-between',
    color:'red',cursor:'pointer', marginTop: 10,
     marginRight:10 }} 
     onClick={()=>onDelete(t.id)}/></h3>
      <p className="task-day">{t.day}</p>
      </div>
      )}


  </div>
  );
};

export default Tasks;
