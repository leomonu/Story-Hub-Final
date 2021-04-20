import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import db from  '../config';
import firebase from 'firebase';
export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:'',
        }
    }
    submitStory=()=>{
        db.collection('stories').add({
            'title':this.state.title,
            'author':this.state.author,
            'story':this.state.story,
        });
        Alert.alert('Story Successfully Added')
        this.setState({
            title:'',
            author:'',
            story:'',
        })
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{flex:1}} behavior = 'padding'enabled  >
            <View>
                
                <Header backgroundColor={'#9cb218'}
            centerComponent={{
              text: 'Write A Story',
              style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
            }}/>
                <TextInput placeholder = 'Story Title' style = {styles.title} onChangeText={(t) => {
            this.setState({ title: t });
          }} value = {this.state.title}/>
                <TextInput placeholder ='Author' style = {styles.author} onChangeText={(t) => {
            this.setState({ author: t });
          }} value = {this.state.author}/>
                
                <TextInput placeholder ='Write your Story' style = {styles.story} onChangeText={(t) => {
            this.setState({ story: t });
          }} value = {this.state.story}/>
                <TouchableOpacity style = {styles.submitButton} onPress={()=>{this.submitStory()}}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }

}
const styles = StyleSheet.create({
    
    title:{
        width:'80%',
        height: 50,
        borderWidth: 4,
        alignSelf:'center',
        textAlign:'center',
        marginTop:20,
    },
    author :{
        width:'80%',
        height: 50,
        borderWidth: 4,
        alignSelf:'center',
        textAlign:'center',
        marginTop:20,
    },
    story:{
        width:'80%',
        height: 250,
        borderWidth: 4,
        alignSelf:'center',
        textAlign:'center',
        marginTop:20,
    },
    submitButton:{
        width:100,
        height:50,
        backgroundColor:'yellow',
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
    },
    submitButtonText:{
        textAlign:"center",
        alignSelf:'center',
        paddingTop:15,
        fontSize:20,
        fontWeight:'bold',

    }
})