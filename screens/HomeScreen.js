import Reacr,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        text: '',
        displayText: '',
      };
    }
    getWord=(text)=>{
        var text= text.toLowerCase()
        try{
            var word = dictionary[text]["word"]
            var lexicalCategory = dictionary[text]["lexicalCategory"]
            var definition = dictionary[text]["definition"]
            this.setState({
                "word":word,
                "lexicalCategory":lexicalCategory,
                "definition":definition
            })
        }
catch(err){
    alert("Sorry this word is not available for now")
    this.setState({
        'text':'',
        'isSearchPressed':false
    })
}

    }
    render(){
        return(
            <View style = {styles.container}>
        <Header
          backgroundColor={'#1c8211'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'red', fontSize: 20 },
          }}
        />
        <TextInput
        style = {styles.inputBox}
        onChangeText={(text) => {
            this.setState({
                text:text,
                isSearchPressed:false,
                word:"Loading...",
                lexicalCategory:'',
                examples:[],
                defination:""
            });
        }}
        value = {this.state.text}
        />
        <TouchableOpacity 
        style = {styles.searchButton} 
        onPress={()=>{
            this.setState({isSearchPressed:true})
            this.getWord(this.state.text)
            }}></TouchableOpacity>

            

<View style = {styles.detailsContainer}>
<Text style = {styles.detailsTitle}>
    Word:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.word}
</Text>
</View>

<View style = {styles.detailsContainer}>
<Text style = {styles.detailsTitle}>
    Type:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.lexicalCategory}
</Text>
</View>

<View style = {{flexDirection:'row',flexWrap:'wrap'}}>
<Text style = {styles.detailsTitle}>
    Definition:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.definition}
</Text>
</View>
</View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    inputBoxContainer :{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:'80%',
        alignSelf:'center',
        height:40
    }
})