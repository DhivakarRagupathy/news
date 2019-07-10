import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight,Image,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

export default class NewsDetails extends Component {

    static navigationOptions = {
        title: "Details"
    }

    getHeader()
    {
        // if(typeof this.props != "undefined" || typeof this.props.navigation != "undefined" )
        // {
        //     return this.props.navigation.state.params.fullArticle.title
        // }
        // return ""
    }
    constructor(props) {
        super(props);
       this.fullart=this.props.navigation.state.params.fullArticle; 
       console.log("News details-const")
       console.log(this.fullart)
    }

    render(){
        if(typeof this.fullart == "undefined") return null
        return(
           <ScrollView>
               <Text style={{fontSize:30,margin:10}}>{this.fullart.title}</Text>
               <View style={{flexDirection:'row',margin:10}}>
               <Text style={{margin:10,}}>{this.fullart.author.split(',')[0]}</Text>
               <Text style={{margin:10,color:'grey'}}>{this.fullart.publishedAt.split('T'[0])}</Text>      
               </View>
               <Image
          style={{width: 350, height: 200,alignSelf:'center'}}
          source={{uri: this.fullart.urlToImage}}
        />
               <Text style={{margin:30,fontSize:20}} >{this.fullart.content}</Text>
           </ScrollView>
        )
    }
}