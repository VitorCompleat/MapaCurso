import react, { useEffect, useState } from "react";
import {Text, View, StyleSheet} from 'react-native';
import api from "../services/api";
import { FontAwesome } from '@expo/vector-icons';


function UC ({modulo, status}) {
    
    var URLmodulo = modulo;
    var icone_status = status;

    function Icone(icone_status){
        if (status ==1){
            return <FontAwesome name="unlock" size={20} color="blue"/>

        }
        else if (status ==2){

            return <FontAwesome name="unlock-alt" size={20} color="green" />
  
        }
        else {

           return <FontAwesome name="lock" size={20} color="red" />
        }
   } 

     const [dataUC, setDataUC] = useState([]);

    const getUC = async () =>{
        try{
            const response = await api.get(
                modulo
            );

        const data = response.data;
        setDataUC(data);

        }
        catch(error){
            console.log(error.response.data);
        }
    };
    
    useEffect (()=> {
        getUC();
        /* api.get("/UnidadeCurricular/filterByModulo/1").then(({data})=>{
            setdataUC(data) */
    },[]);


  return (
    <View>
      {dataUC.map(UnidadeCurricular => 
        (          
            <Text style = {styles.UnidadeCurricular} key={UnidadeCurricular.codigo}> 
              {UnidadeCurricular.nome} {' - '+ UnidadeCurricular.horas + 'h'} {Icone()}
            </Text>
        ))}
    </View>
  );
  
}

const styles = StyleSheet.create({
  UnidadeCurricular: {

    fontSize:14,
    textAlign:"left", 
    fontWeight:"regular",
    lineHeight: 24
  }
})

export default UC;
