import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#B5DBF5"
    },
    imglogo:{
        width:60,
        height:70,
        
    },
    painel:{
        width:'80%',
        padding:10,
        margin:19,
        shadowColor:'black',
        shadowOffset:{width:30, height:10},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:10,
        backgroundColor:"white",
        
    },
    input:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        padding:5,
        marginBottom:10,
        fontSize:15,
    },
    btnlogin:{
        padding:30,
    },
    txtbtnlogin:{
        textAlign:'center',
        color:"teal",
    },
    imgdoctor:{
      width:100,
      height:100,
      borderRadius:10,
      margin:25,
      shadowColor:'black',
      shadowOffset:{width:30, height:20},
      shadowOpacity:0.8,
      shadowRadius:10,
    },
    descricao:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        paddingTop:47
    },
    btnagendar:{
        backgroundColor:'#86E06C',
        padding:20,
        borderRadius:50,
        color:"black",
        fontWeight:'bold',
    },
    txtbtncadastrar:{
        fontSize:20,
        fontWeight:"bold",
        color:"teal",
        textTransform:"uppercase"
    },
    btncadastrar:{
        //position:'absolute',
        //bottom:100,
        backgroundColor:'#000',
        padding:20,
        borderRadius:50,
    },
    scroll:{
        width:"100%",
    },
    nomedoutor:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
       // padding:1,
        paddingTop:30,
    },
    bordaicones:{
        
    },
    titulo:{

    },
    
})