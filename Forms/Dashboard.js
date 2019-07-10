import React, { Component } from 'react';
import NewsCard from './NewsCard'
import { connect } from 'react-redux'
import { Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ActionCreators from '../ActionCreators/DashboardActionCreator'


class Dashboard extends Component {

    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Dashboard',
        drawerIcon: () => (
            <Icon type="FontAwesome" name='th-list' style={{ fontSize: 25, alignItems: 'flex-start' }}

                style={{
                    width: 18,
                    height: 18, tintColor: '#000000'
                }}
            />
        ),
    };

  

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        
        this.props.fetchFeed()
       
    }

    onFetchFailure=(response)=>{
        console.log(response)
        alert("Error Occurs ! Please contact admin !")
     }


    getArticle=(articleSource)=>{
          var matchingArticle= this.props.articleList.map((article)=>{
              if(article.source==articleSource ){
                  return article
              }
          })

          return matchingArticle[0]
    }

    NavigateToDetails=(articleSource)=>{
      
     
        // if (articleSource == null || typeof articleSource == "undefined") {

            this.props.navigation.navigate('NewsDetails',{fullArticle:articleSource})
        // }        
  
     

    }

    renderFeed = () => {

        if (this.props.articleList == null) {
            return <Text>{"Fetching your news"}</Text>
        }

        return this.props.articleList.map((article, index) => {
            return (
                <NewsCard Article={article} onPress={this.NavigateToDetails} />
            )
        })
    }

    render() {
        return (
            <ScrollView>
                {
                    this.renderFeed()
                }
            </ScrollView>

        );
    }

}
    
function mapStateToProps(state) {
    return {
        articleList: state.articleList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFeed: () => dispatch(ActionCreators.FetchAsync('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)