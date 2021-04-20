import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList,TextInput } from 'react-native';
import {SearchBar,Header,} from 'react-native-elements';
import db from  '../config';
export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            search: [],
            allStories:[],
            lastVisibleStories:[]
          };
    }
    searchStory = async (text)=>{
    // var enteredText  = text.split('')
    // var text = text.toUpperCase()
    
      const story = await db.collection('stories').where('title','==',text).get()
      story.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          lastVisibleStories:doc
        })
      })
    
      
      
   
  }
  fetchMoreStories = async()=>{
    var enteredText  = this.state.search.split('')
var text = this.state.search.toUpperCase()

  const story = await db.collection('stories').where('title','==',text).startAfter(this.state.lastVisibleStories).limit(10).get()
  story.docs.map((doc)=>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
      lastVisibleStories:doc
    })
  })


  }
    
    updateSearch = (search) => {
        this.setState({ search });
      };
    render(){
          const { search } = this.state;
        return(
         <View>
                 <Header backgroundColor={'#9cb218'}
            centerComponent={{
              text: 'Read Story ',
              style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
            }}/>
                
                <TextInput 
          style ={styles.bar}
          placeholder = "Enter Title here"
          onChangeText={(text)=>{this.setState({search:text})}}/>
            <TouchableOpacity style = {styles.searchButton} onPress = {()=>{this.searchStory(this.state.search)}}>
                <Text style = {styles.searchButtonText}>Search</Text>
            </TouchableOpacity>

            <FlatList
            data={this.state.allStories}
            renderItem={({item})=>(
              <View style={{borderBottomWidth: 2}}>
                <Text>{"Title: " + item.title}</Text>
                <Text>{"Author: " + item.author}</Text>
                <Text>{"Story: " + item.story}</Text>
                
              </View>
            )}
            keyExtractor= {(item, index)=> index.toString()}
            onEndReached = {this.fetchMoreStories}
            onEndReachedThreshold = {0.7}
          /> 
                
          </View>
        )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  searchBar:{
    flexDirection:'row',
    height:140,
    width:150,
    borderWidth:0.5,
    alignItems:'center',
    backgroundColor:'grey',

  },
  bar:{
    borderWidth:2,
    height:30,
    width:300,
    paddingLeft:10,
  },
  searchButton:{
    borderWidth:1,
    height:30,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    
    marginLeft:300,
    marginTop:-30
  }
})