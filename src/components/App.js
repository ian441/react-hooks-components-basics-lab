import React, {useState} from "react";


function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home(props) {
  console.log(props)
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
)
}
function About(props) {
  console.log(props)
  return(
    <div id="about">
    <h1>About</h1>
    </div>
  )
 }

 

//   function Tabs() {
//    const [activeTab, setActiveTab] = useState("home");
 

//  return (
//    <div>
//     <nav>
//        <button onClick={() => setActiveTab("home")}>Home</button>
//      <button onClick={() => setActiveTab("about")}>About</button>
//      </nav>
//      <div>
//          {activeTab === "home" && <Home />}
//          {activeTab === "about" && <About />}
//       </div>
//   </div>
//  )

 
function App() {
  return (
    <div>
      <NavBar />
     <Home />
     <About />
    </div>
  );
}

export default App;
