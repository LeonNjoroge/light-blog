import {useState} from 'react';

const Home = () =>{
  //  let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(24);
    const handleClick = () =>{
      /* name='luigi';
       console.log(name);
       */
      setName('luigi');
      setAge(32);
    }

    return(
        <div className = "home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

/* Cheking different Component uses
const Home = () =>{
    const handleClick = (e) =>{
        console.log("Hello, Ninjas", e);
    }

    const handleClickAgain = (name, e) =>{
        console.log("Hello " + name, e.target);
    }

    return(
        <div className = "home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>

            <button onClick={(e)=>handleClickAgain('mario', e)}>Click me Again</button>
        </div>
    );
}
    */

export default Home;
