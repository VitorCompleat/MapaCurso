import {Card} from 'react-native-paper';
import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import UC from './components/UC';

export default function App() {
  return (

 
    <SafeAreaView style={styles.container}>
      <ScrollView >
      
        <Card style={styles.card}>
          <Card.Title titleStyle={{ fontWeight:"bold"}} title="Módulo 1"/>
          <Card.Content>
            <UC modulo ='/UnidadeCurricular/filterByModulo/1' status={1}/>
            </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title titleStyle={{ fontWeight:"bold"}} title="Módulo 2"/>
          <Card.Content>
            <UC modulo ='/UnidadeCurricular/filterByModulo/2' status={1}/>
            </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title titleStyle={{ fontWeight:"bold"}} title="Módulo 3"/>
          <Card.Content>
            <UC modulo ='/UnidadeCurricular/filterByModulo/3' status={2}/>
            </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title titleStyle={{ fontWeight:"bold"}}  title="Módulo 4"/>
          <Card.Content>
            <UC modulo ='/UnidadeCurricular/filterByModulo/4' status={3}/>
            </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title titleStyle={{ fontWeight:"bold"}} title="Módulo 5"/>
          <Card.Content>
            <UC modulo ='/UnidadeCurricular/filterByModulo/5' status={3}/>
            </Card.Content>
        </Card>

      </ScrollView>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
		backgroundColor:'#B8D8EA'
  },

  scroll: {
    flex: 1,
    padding: 20
  },

  list: {
    flex: 1,
    marginTop:20,
  },

  card: {
    padding: 16,
    backgroundColor:'white',
    marginTop:8,
    margin:16,
    marginLeft:52
    
  }
});
