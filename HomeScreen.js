import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './database';

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      isSearchedPressed: false,
      word: '',
      lexicalCategory: '',
      examples: '',
      definition: '',
    };
  }

  getWord = (text) => {
   var text = text.toLowerCase();
    try{

          var word = dictionary[text]["word"]
          var definition=dictionary[text]["definition"]
          var lexicalCategory=dictionary[text]["lexicalCategory"]
          this.setState({

              "word": word,
              "definition": definition,
              "lexicalCategory": lexicalCategory ,
              


          })

    }
    catch(err){
      alert("We are Sorry! This word isn't available in the offline dictionary for now :(")
      this.setState({
        'text':'',
        'isSearchPressed':false
      })
    }
  }

  render() {
    return (
      <View>
      
       <Header
          backgroundColor = {'black'}
          centerComponent = {{text:"POCKET DICTIONARY" ,
          style:{fontSize:18, color:"#F7F0F5", fontFamily: 'Amatic SC'}}}
        />

        <TextInput
          style={styles.inputBox}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              text: text
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text
           style = {{
           fontFamily: 'Amatic SC',
           fontSize : 20,
           color : '#F7F0F5' 
           }}>
              SEARCH
          </Text>
        </TouchableOpacity>


        <Text 
        style={styles.text}>
          Word : {this.state.word}
        </Text>

        <Text 
        style={styles.text}>
          Definition : {this.state.definition}
        </Text>

        <Text 
        style={styles.text}>
            Type : {this.state.lexicalCategory}
        </Text>

        
      
      </View>
      );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#000000',
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:10,
    outline: 'none',
    color: '#F7F0F5',
    fontFamily: 'Amatic SC',
    fontSize: 20,
  },

  searchButton: {
    width: '40%',
    height: 30,
    alignSelf: 'center',
    textAlign: ' center',
    margin: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#000000',
    paddingTop:2,
  },

  text:{
    marginTop:10,
    fontFamily: 'Roboto',
    fontSize:20,
    fontStyle: 'bold'
  }
})

   