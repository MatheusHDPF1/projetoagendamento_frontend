import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';
import { server } from '../config/Caminho';
import { styles } from '../css/Styles';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function Home({route,navigation}){
    
  const{dados} = route.params;
  console.log(dados[1]._id);

    return(
        
        <View style={styles.container}>
           
           <ScrollView horizontal={false} style={styles.scroll}>
              
             <View style={styles.painel}>
              
              <Image source={{uri:"https://image.shutterstock.com/image-photo/smiling-female-doctor-lab-coat-260nw-1473042992.jpg"}} style={styles.imgdoctor}/>
               
               <View>

                   <Text style={styles.nomedoutor}>Dr Amy</Text>

                   <Text style={styles.descricao}>Dermatologista</Text>
               
               </View>
             
             </View>
              
              <View style={styles.painel}>
                 <Image source={{uri:"https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"}} style={styles.imgdoctor}/>
               
               <View>
                  
                  <Text style={styles.nomedoutor}>Dr Andre</Text>

                  <Text style={styles.descricao}>Cardiologista</Text>
                
                </View>
              
              </View> 

              <View style={styles.painel}>
               <Image source={{uri:"https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg"}} style={styles.imgdoctor}/>
               
               <View>

                  <Text style={styles.nomedoutor}>Dr Fernando</Text>

                  <Text style={styles.descricao}>Neurologista</Text>
               
               </View>

               </View>

               <View style={styles.painel}>
               <Image source={{uri:"https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?b=1&k=20&m=1271328839&s=170667a&w=0&h=SIMzwoe8eu43OoY4M3ElZCMxW9MgDbZbVzMhh4VY2zM="}} style={styles.imgdoctor}/>
                
                
                <View>
                  <Text style={styles.nomedoutor}>Dr Lydia</Text>

                   <Text style={styles.descricao}>Pediatra</Text>
                
                
                </View>
                </View>
                </ScrollView>
                
               <TouchableOpacity onPress={()=>{
                   navigation.navigate("Agendamento",{id:dados[1]._id})
                }}
                >
                   <Text style={styles.btnagendar}>Agendar</Text>
                    </TouchableOpacity>

           
           <View style={styles.icone1}>
             
             <Entypo name="home" size={35} color="black"/>

           <View style={styles.icone2}>

           <TouchableOpacity onPress={()=>{
                   navigation.navigate("Agendas")
                }}
                >
               <AntDesign name="calendar" size={35} color="black"/>
               </TouchableOpacity>  

              </View>
           </View>
        </View>
        
    )
}