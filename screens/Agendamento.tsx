import * as React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Text, View } from 'react-native';
import { server } from '../config/Caminho';
import { styles } from '../css/Styles';


let nomemedico = ""
let horario = ""
let dia = ""
let idpacienteagenda = ""

export default function Agendamento ({route}){

    const {id} = route.params;

    idpacienteagenda = id;
    const[nomemedicoagenda, setNomeMedicoAgenda] = React.useState("");
    const[horarioagenda, setHorarioAgenda] = React.useState("");
    const[diaagenda, setDiaAgenda] = React.useState("");

    return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Agendamento</Text>
          
            <View style={styles.painel}>
                <TextInput placeholder="Nome do Medico" style={styles.input}onChangeText={(value)=>setNomeMedicoAgenda(value)} 
                value={nomemedicoagenda}/>
             
                <TextInput placeholder="Horario" style={styles.input}onChangeText={(value)=>setHorarioAgenda(value)} 
                value={horarioagenda}/>

                <TextInput placeholder="Dia" style={styles.input}onChangeText={(value)=>setDiaAgenda(value)} 
                value={diaagenda}/>
              


              <TouchableOpacity style={styles.btnlogin} onPress={()=>{

                    nomemedico = nomemedicoagenda;
                    horario = horarioagenda;
                    dia = diaagenda;
                    
                    efetuaragenda()


                    setNomeMedicoAgenda("")
                    setHorarioAgenda("")
                    setDiaAgenda("")
                    
                }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar Agenda</Text>
                </TouchableOpacity>
              </View>
            </View>
     )
}

function efetuaragenda(){
    
    
    fetch(`${server}/agenda/cadastro`,{
    method:"post",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        idpaciente:idpacienteagenda,
        nomemedico:nomemedico,
        horario:horario,
        dia:dia
    })
}).then((response)=>response.json())
.then((resultado)=>{
    Alert.alert("Aviso",resultado.output)
    console.log(resultado)
}).catch((erro)=>console.error(`Erro ao executar->${erro}`))


}