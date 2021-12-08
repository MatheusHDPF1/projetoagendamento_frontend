import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { server } from '../config/Caminho';
import { styles } from '../css/Styles';

export default function Agendas(){
  
    console.log(`Dados na Agendas `)

    const[LstAgendas, setLstAgendas] = React.useState([])

    React.useEffect(()=>{
      fetch(`${server}/agenda/`,{
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

    return(
        <View style={styles.painel}>
            <View>
                {
                  LstAgendas.map((item,index)=>(
                    <View >
                       <Text style={styles.nomedoutor}>Doutor: {item.nomemedico}</Text>
                       <Text style={styles.horario}>Horario: {item.horario}</Text>
                       <Text style={styles.dia}>Data: {item.dia}</Text>
                    </View>
                  ))
                }
              </View>
            
        </View>
    )
}