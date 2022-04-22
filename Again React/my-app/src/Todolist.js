// import { useState } from "react";
// import App from "./App";
// import './Todolist.css';

// export default function Todolist(props){
//     const [myList, setMyList] = useState([
//         {
//             name: 'game',
//             time: 2


//         },
//         {
//             name: 'app',
//             time: 1
//         }
//     ])
//     let myAdd = () => {
//         let newName = document.getElementById("input_add_name").value
//         let newTime = document.getElementById("input_add_time").value
//         if(newName!=" " && newTime!=" "){
//             let newSubject={
//                 name:newName,
//                 time:newTime
//             }
//             let cloneList=[...myList]
//             cloneList.push(newSubject)
//             setMyList(cloneList)
//             document.getElementById("input_add_name").value=" "
//             document.getElementById("input_add_time").value=" "

//         }
//     }
//     let myDelete = (index) =>{
//         let cloneList = [...myList]
//         cloneList.splice(index, 1)
//         setMyList(cloneList)
//     }
//     return(
//         <div>
//             <input id="input_add_name"></input>
//             <input id="input_add_time"></input>
//             <button onClick={myAdd}>add</button>
            
//             <ul>
//                 {myList.map((x, index)=>{
//                     return <li key={index}>{x.name + "-" + x.time} 
//                     <button className="btn-delete" onClick={() => myDelete(index)}>delete</button>
//                     </li>
//                 })}
//             </ul>
//         </div>
//     )
       
    
// }