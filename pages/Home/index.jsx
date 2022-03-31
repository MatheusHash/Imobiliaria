import Axios from '../api/axios';
import Imovel from './components/Imovel'

import {useState, useEffect} from 'react';
import {Container} from '@chakra-ui/react';

// Link que me ensinou a fazer isso https://www.youtube.com/watch?v=bYFYF2GnMy8

const Home= ()=>{
    const [listaCasa, setListaCasa] = useState([]);

    useEffect(() => {
      Axios
        .get("/api/hello")
        .then((res) => {
          setListaCasa(res.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    if(listaCasa !== null){
      return (
        <Container maxW='xxl' minHeight='calc(100vh)' bg='gray.800' centerContent>
                {
                  listaCasa.map(
                    (casa) => 
                      <Imovel 
                        key={casa.id}
                        title={casa.title} 
                        price={casa.price} 
                      />
                  )
                }
        </Container>
      )
    }else{
      return (
        <>
          <p>Não temos imóveis dísponivel no momento!</p>
        </>
      )
    }
    
  }

  export default Home;