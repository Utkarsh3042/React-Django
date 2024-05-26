import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getAllStudent(){
      try {
        const students = await axios.get("http://127.0.0.1:8000/app/student/");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllStudent();
  }, [])
  return (
    <div className="App">
      <h1>Connect React JS to Django</h1>
      {
        students.map((student,i)=>{
          return(
            <h2 key={i}>{student.student_name} {student.student_email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
