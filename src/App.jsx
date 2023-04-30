import axios from './axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [isError, setError] = useState("");

  const getPost = async () => {
    try{
      const res = await axios.get("/posts");
      setPosts(res.data);
      // console.log(typeof(posts));
    } catch(err){
      setError(err.message);
      // console.log(err);
    }
  }
  useEffect(()=> {
    getPost();
  }, [])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", padding: "0 250px"}}>
      <h1 style={{width: "100%", textAlign: "center", color: "gray"}}>Fetching API through Axios</h1>
      {
        !isError? posts.slice(0,12).map((post, i) => {
          const {id, title, body} = post;
          return <div key={id} style={{
           width: "350px",
           height: "200px",
           border: "1px solid cyan",
           margin: "10px",
           background: "#546e5b",
           textAlign: "center",
           padding: "0 10px"
          }}>
            <h2>{title.slice(0,20)}</h2>
            <p>{body}</p>
          </div>
        }) :
        <h3 style={{border: "1px solid cyan", padding: "5px 50px"}}>{isError}</h3>
      }
    </div>
  )
}

export default App
