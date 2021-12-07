import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { server } from '../config/Caminho';

export default function Agendas(){
    return(
        <View>
            <Text>Ola você está na tela do seus agendamentos</Text>
        </View>

    )
}

function TelaAgendas(){

    console.log(`Dados na Home`)

    const[lstAgendas, setLstAgendas] = React.useState([])

    React.useEffect(()=>{
      fetch(`${server}`,{
          method:'GET',
          headers:{
              accept:'application/json',
              'content-type':'application/json',
          }
      })
      .then ((response)=>response.json())
      .then((result)=>{
          console.log(result)
          setLstAgendas(result.output)
      })
      .catch((erro)=>console.error(`Erro ao ler a api ->${erro}`))
    },[])

}