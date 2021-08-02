import { useState } from "react";
const students = ['yair', 'itay', 'nicole', 'ophir'];

export default function StudentPicker() {
    const[student, setStudents] = useState(null);

    function pick() {
        setStudents(students.pop());

}   

return <div>
    <button>onClick={pick}>Pick</button>
    <div>{student}</div>
</div>

}