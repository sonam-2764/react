import { useState } from "react";

// function App() {
//   let name = "Sonam";
//   const year = 2026;
//     const abc = ()=>{
//       console.log("hemlo");
//     }
//     abc();
//     const changeUser =()=>{
//       name = "Shanu";
//     }
//   return (
//     <>
//       <h1 className="title">Hello, {name}!</h1>
//       <p>The year is {year}</p>
//       <p>Next year is {year + 1}</p>
//       {/* <button onClick={abc}>Change name</button> */}
//       <button onClick={changeUser}>Change name</button>
//    </>
//   );
// }
//  export default App;







const App = () => {
  const [a, setA] = useState(10)
  return (
    <div>
      <h1>Value of a  is {a}</h1>
      <button onClick={() => setA(a + 1)}>Change A</button>
    </div>
  )
}
export default App;





