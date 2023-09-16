import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Navigate, useParams } from 'react-router-dom';


function SinglePost() {
    const [pos, setPos] = useState([]);
    

    const {id} = useParams();
    // console.log(pos);

      useEffect(()=>{
        async function getPos(){
            try{
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                setPos(response.data)
            }catch(err){
                console.log(err);
            }

        }
        getPos();
      },[id]);

     

      if (!pos){
        return <Navigate to={"*"}/>;
    
      }
 
  
    

  return (
    
    <div>
        <h2>userId: {pos.userId}</h2>
        <p>body: {pos.body}</p>
        
    </div>
  )
}

export default SinglePost