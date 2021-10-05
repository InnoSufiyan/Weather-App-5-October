import { useEffect , useState} from "react"
import axios from 'axios'

function Useeffectt () {

    const [posts , setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const newPosts = res.data.data.children
                .map(obj => obj.data);

                setPosts(newPosts);
            });
        return() => {
            console.log("unloaded")
        };
        
    }, []);

    return(
        <>
        {posts.length === 0 ? <h1>Loading...</h1> : null}
        {posts.map((eachItem, index) => (
        
        <p key ={index}>
                <b> {eachItem.id} : </b>
                {eachItem.title}
                {console.log(eachItem.id)}
            </p>
        ))}
        </>
    )
}

export default Useeffectt;