import * as React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { server } from '../config/Caminho';
import { styles } from '../css/Styles';

let nome = ""
let email = ""
let usuario = ""
let senha = ""

export default function Cadastro(){
    
    const[nomePaciente, setNomePaciente] = React.useState("");
    const[emailPaciente, setEmailPaciente] = React.useState("");
    const[usuarioPaciente, setUsuarioPaciente] = React.useState("");
    const[senhaPaciente, setSenhaPaciente] = React.useState("");
    
    
    return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Cadastro</Text>
          
            <View style={styles.painel}>
                <TextInput placeholder="Nome do Paciente" style={styles.input}onChangeText={(value)=>setNomePaciente(value)} 
                value={nomePaciente}/>
             
                <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input}onChangeText={(value)=>setEmailPaciente(value)} 
                value={emailPaciente}/>

                <TextInput placeholder="Usuário" style={styles.input}onChangeText={(value)=>setUsuarioPaciente(value)} 
                value={usuarioPaciente}/>

                <TextInput placeholder="Senha" secureTextEntry style={styles.input}onChangeText={(value)=>setSenhaPaciente(value)} 
                value={senhaPaciente}/>
                
                
                <TouchableOpacity style={styles.btnlogin} onPress={()=>{

                    nome = nomePaciente;
                    email = emailPaciente;
                    usuario = usuarioPaciente;
                    senha = senhaPaciente;



                    efetuarCadastro()


                    setNomePaciente("");
                    setEmailPaciente("")
                    setUsuarioPaciente("")
                    setSenhaPaciente("")
                }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function efetuarCadastro(){
    
    
    fetch(`${server}/cadastro`,{
    method:"post",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        nome:nome,
        email:email,
        usuario:usuario,
        senha:senha
    })
}).then((response)=>response.json())
.then((resultado)=>{
    Alert.alert("Aviso",resultado.output)
    // console.log(resultado)
}).catch((erro)=>console.error(`Erro ao executar->${erro}`))


}

