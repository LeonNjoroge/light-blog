import {useState, useEffect} from 'react';
import BlogList from './Bloglist';

const Home = () =>{
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    {/*const [blogs, setBlogs] = useState([
        {title: 'My new Website', body:'lorem ipsum...', author: 'mario', id: 1 },
        {title: 'Welcome party!', body:'lorem ipsum...', author: 'yoshi', id: 2 },
        {title: 'Web dev top tips', body:'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    */}

    //const [name, setName] = useState('mario');

    {/*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }*/
}
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data=>{
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            });

        //console.log('use effect Run');
        //console.log(blogs);
       // console.log(name);
    }, 1000);
    }, []);
       
        


    return(
        <div className = "home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs !" />} 
        </div>
    )
}    
    {/*
      return(
          <div className = "home">
              {blogs && <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>}
              <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs !"/>
                <button onClick = {()=>setName("Steve")}>Change Name</button>
                <p>{name}</p>  
          </div>
      );
      */}
{/* Change State
const Home = () =>{
  //  let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(24);
    const handleClick = () =>{
     // name='luigi';
      // console.log(name);
       
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

*/}
{/* Cheking different Component uses
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
    */}

export default Home;
