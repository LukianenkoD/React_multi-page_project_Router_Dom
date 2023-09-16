import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostPage() {
    const [posts, setPost] = useState([]);
    
    useEffect(()=>{
        async function getPost(){
            try{
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                setPost(response.data)
            }catch(err){
                console.log(err);
            }

        }
        getPost();
      },[]);
console.log(posts);
  return (
    <div>
        <h1>Our Posts</h1>
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{`title:${post.title}`}</h3>
                {/* <p>body: ${post.body}</p> */}
                <Link to={`/posts/${post.id}`}>View more</Link>

            </div>
        ))}
    </div>
    
  )
}

export default PostPage