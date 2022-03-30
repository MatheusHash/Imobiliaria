import {useState, useEffect} from 'react';
import Axios from '../api/axios';

// Link que me ensinou a fazer isso https://www.youtube.com/watch?v=bYFYF2GnMy8

const Home= ()=>{
    const [listaCasa, setListaCasa] = useState([]);

    useEffect(() => {
      Axios
        .get("/api/hello")
        .then((response) => {
          console.log(response)
          setListaCasa(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
      <div>
        <ul>
            {
              listaCasa.map(casa => <li key={casa.id}><p>{casa?.title}</p><p>{casa?.description}</p></li>)
            }
        </ul>
      </div>
    )
  }

  export default Home;