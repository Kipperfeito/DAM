import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image,} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [pedido, setPedido] = useState([]);

  const selecionarItem = (item) => {
    setPedido([...pedido, item]);  // Adiciona o item ao pedido
    alert(`${item.nome} selecionado`);
  };

  const encerrarPedido = () => {
    if (pedido.length === 0) {
      alert('Nenhum item selecionado');
    }  else if(pedido.length === 1) {
      const total = pedido.reduce((acc, item) => acc + item.preco, 0); 
      alert(`Você selecionou ${pedido.length} item. Valor total: R$ ${total.toFixed(2)}`);
    }  else {
      const total = pedido.reduce((acc, item) => acc + item.preco, 0); 
      alert(`Você selecionou ${pedido.length} itens. Valor total: R$ ${total.toFixed(2)}`);
    }
  };
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.cabecalho}>
        <Text style={styles.nomePastelaria}>PASTELARIA DO KIPPER</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Pressable style={styles.view1} onPress={() => selecionarItem({ nome: 'Carne', preco: 5.00 })}>
            <Image source={require('./assets/Carne.jpeg')} style={styles.imagem} />
            <Text style={styles.titulos}>Carne</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </Pressable>
        </View>
        <View style={styles.view2}>
          <Pressable style={styles.view2} onPress={() => selecionarItem({ nome: 'Frango', preco: 5.00 })}>
            <Image source={require('./assets/Frango.jpg')} style={styles.imagem} />
            <Text style={styles.titulos}>Frango</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </Pressable>
        </View>
        <View style={styles.view3}>
          <Pressable style={styles.view3} onPress={() => selecionarItem({ nome: 'Queijo', preco: 5.00 })}>
            <Image source={require('./assets/Queijo.jpeg')} style={styles.imagem} />
            <Text style={styles.titulos}>Queijo</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </Pressable>
        </View>
        <View style={styles.view4}>
          <Pressable style={styles.view4} onPress={() => selecionarItem({ nome: 'Romeu e Julieta', preco: 5.00 })}>
            <Image source={require('./assets/Romeu.jpeg')} style={styles.imagem} />
            <Text style={styles.titulos}>Romeu e Julieta</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </Pressable>
        </View>
        <Button title='Encerrar pedido' onPress={encerrarPedido}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#f2d77e',
  },
  container: {
    flex: 3,
    backgroundColor: '#f2d77e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 30,
    alignContent: 'space-evenly'
  },
  view1: {
    backgroundColor: '#fff7de',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170
  },
  view2: {
    backgroundColor: '#fff7de',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170
  },
  view3: {
    backgroundColor: '#fff7de',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170
  }, 
  view4: {
    backgroundColor: '#fff7de',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170
  },
  titulos: {
    color: '#ffc400',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  imagem: {
    width: '90%',
    height: '60%'
  },
  cabecalho: {
    flex: 1,
    backgroundColor: '#f2d77e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  nomePastelaria: {
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    textTransform: 'capitalize',
    color: '#d35400'
  },
  preco: {
    color: '#27ae60',
    fontSize: 16,
    marginTop: 5,
  }
});
