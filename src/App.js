import "./styles.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import { FaStarOfDavid} from 'react-icons/fa';
const tasks = {
  paddingLeft: "25%",
  paddingRight: "25%"
};

const faintRed = "rgb(245,102,66)";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const [flag, setFlag]=useState([]);
  // const [MarkImportant,setMarkImportant]=useState([{}]);

  const onChange = (e) => {
    setNewTask(e.target.value);
    // console.log(newTask);
  };

  const addTask = (e) => {
    e.preventDefault();

    setTask((prev) => [...prev, newTask]);
    // console.log(task);
  };

  const onDelete = (taskToDelete) => {
    const newTasks = () => task.filter((task, index) => task !== taskToDelete);
    setTask(newTasks());
  };
  const checkLength = () => {
    if (task.length === 0)
      return (
        <h4
          style={{
            backgroundColor: faintRed,
            display: "inline",
            padding: "5px 30px",
            borderRadius: 7,
            boxShadow: "2px 3px 30px"
          }}
        >
          No tasks to show{" "}
        </h4>
      );
  };

  // const toggleFunction=(key)=>{

  //   if(MarkImportant[key].flag){
  //     setMarkImportant((prev)=>(prev.filter((prev)=>{if(prev.key===key)prev[key]={color:'#f29c07',flag:false};})));

  //   }
  //   else{
  //     setMarkImportant((prev)=>(prev.filter((prev)=>{if(prev.key===key)prev[key]={color:'#f29c07',
  //   flag:true
  //   };})));
  //   }

  //   // console.log(flag);
  //   console.log(MarkImportant);
  // }

  return (
    <div className="App">
      <h1 style={{ color: "#ffffff" }}>Assign your tasks</h1>

      <form onSubmit={addTask}>
        <div>
          <lable style={{ color: "rgb(252, 194, 3)" }}>Enter Task </lable>
        </div>
        <br />
        <div>
          <input
            className="InputStyles"
            type="text"
            onChange={onChange}
            required
            autoFocus
          />
        </div>

        <br />
        <div>
          <input className="ButtonStyles" type="submit" value="ADD" />
        </div>
        {/* <div> <button onClick={addTask}>ADD</button></div> */}
      </form>
      <h2>Your Tasks</h2>
      {checkLength()}

      <div style={tasks}>
        {task.map((task, index) => (
          <div
            style={{
              borderLeft: " solid 4px blue",
              padding: 4,
              backgroundColor: "pink",
              marginBottom: "5px",
              display: "flex",
              height: 20,
              position: "relative",
              boxShadow: "2px 3px 3px"
            }}
          >
            {/* <h3 style={{display:"inline",}} key={index}>{task}</h3> */}
            <span
              style={{ display: "inline", position: "absolute", left: 10 }}
              key={index}
            >
              {task}
            </span>
            <span
              style={{ display: "inline", position: "absolute", right: 10 }}
            >
              {/* <FaStarOfDavid
               onClick={()=> toggleFunction(index)}
              className='MarkImportant'
                style={MarkImportant[index]}
              /> */}
              <FaTrashAlt
                onClick={() => onDelete(task)}
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
