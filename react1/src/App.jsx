function App() {
  let name = "Sonam";
  const year = 2026;
    const abc = ()=>{
      console.log("hemlo");
    }
    abc();
    const changeUser =()=>{
      name = "Shanu";
    }
  return (
    <>
      <h1 className="title">Hello, {name}!</h1>
      <p>The year is {year}</p>
      <p>Next year is {year + 1}</p>
      {/* <button onClick={abc}>Change name</button> */}
      <button onClick={changeUser}>Change name</button>
   </>
  );
}
 export default App;






