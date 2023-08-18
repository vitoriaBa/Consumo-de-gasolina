import{useState} from 'react';
import { Text, SafeAreaView, StyleSheet,View,TextInput,Button,TouchableOpacity} from 'react-native';




export default function App() {
  function calcularcom(){
   
   const resultado = km / combustivel;
   alert("o consumo do seu carro é "+resultado);
   
} 
  
const [km,setkm]=useState('');
const [combustivel,setCombustivel]= useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
         Consumo de Combustivel
      </Text>
     <TextInput 
     style={styles.input}
     placeholder="Digite os km percorridos "
     keyboardType="numeric"
     onChangeText={(km)=>setkm(km)}
     />
    
     <TextInput
      style={styles.input}
     placeholder="Digite a quantidade de combustivel"
     keyboardType="numeric"
     onChangeText={(combustivel)=>setCombustivel(combustivel)}
     />

        <TouchableOpacity style={styles.btn}onPress={calcularcom}>
        <Text style={styles.textbtn}>Calcular o Consumo</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin:24,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:60
  },
  btn:{
    alignItems:'center',
    backgroundColor:'#483D8B',
    padding:8,
    borderRadius:10,
    margin:15,
    margintop:50
  },
   textbtn:{
   fontSize:30,
  color:'#fff'
  },
  input:{
    fontSize:17,
    backgroundColor:'#836FFF',
   padding:20,
   borderRadius:10,
   margin:15,
   color:'#F5FFFA',
   placeholder:'#fff'
  }
});
