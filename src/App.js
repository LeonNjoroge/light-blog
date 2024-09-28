import Navbar from './Navbar';
import Home from './Home';


function App(){
  return(
    <div className = "App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;

/* First Editted APP
function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = {name: "Dude", age:30};
  const link = "https://google.com";
  return (
    <div className="App">
     <div className = "content">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      <p>{10}</p>
      <p>{'hello ninjas'}</p>
      <p>[1,2,3,4]</p>
      <p>{Math.random()*10}</p>

      <a href={link}>Google Site</a>
     </div>
    </div>
  );
}
*/
