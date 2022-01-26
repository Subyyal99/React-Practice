import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [kam, setKam] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    console.log("rrrrr",reminder)
   
    const submit = (e) =>{
        e.preventDefault();
        if(!kam){
            alert('Please Add Task')
        }
        onAdd({kam,day, reminder})

        setKam('')
        setReminder(false)
        setDay('')
    }

  return <div >
      <form className="form" onSubmit={submit}>
          <div className="form-div">
              <label className="label">
                  Task
              </label>
              <input className="form-input"
              type={"Text"} placeholder="Add New Task"
              value={kam} onChange={(e) =>
               setKam(e.target.value)}></input>
          </div>
          <div className="form-div">
              <label className="label">
                 Day And time
              </label>
              <input className="form-input" value={day} onChange={(e) =>
               setDay(e.target.value)}
               type={"Text"} placeholder="Feb 5 7:00pm"></input>
          </div>
          <div className="form-div form-reminder ">
              <label className="label">
                  Reminder
              </label>
              <input value={reminder}
              checked= {reminder}
              onChange={(e) =>
               setReminder(e.currentTarget.checked)}
              type={"checkbox"} ></input>
          </div>
          <input className="btn-block" type='submit' value={'Save Task'}/>

      </form>

  </div>;
};

export default AddTask;
