import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,Button, Alert, FlatList, SectionList } from 'react-native';

import React from 'react';

const myDummyArray = [
  {
    key:0,
    title:'Pakistan',
    data:[{key:0, title:'Lahore'},{key:1, title:'Karachi'}]
  },
  {
    key:1,
    title:'India',
    data:[{key:0, title:'Delhi'},{key:1, title:'Banglore'}]
  },
  ];

export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
      </View>
    
    <View style={styles.center}>

        <SectionList
          sections={myDummyArray}
          keyExtractor={item=>item.key}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{backgroundColor:'grey'}}>
            <Text>{title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={{backgroundColor:'green', height:40, marginBottom:10, flex:1, flexDirection:'row'}}>
            <View style={{ flex:'50%'}}>
            <Text style={{color:'white'}}> {item.title} </Text>
            <Text style={{color:'white'}}> {item.class} </Text>
            </View>
            <View style={{flex:'50%', alignItems: 'right',justifyContent: 'right',}}>
            <Text style={{color:'white'}}> {item.time} </Text>
            </View>
            </View>
          )}
        />
     
    </View>
    <View style={styles.bottom}>
    <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    flex: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: '50%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: '25%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
