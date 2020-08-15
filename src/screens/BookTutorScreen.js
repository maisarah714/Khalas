import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab } from 'native-base';
import { Alert, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BookTutorScreen extends Component {
    
    componentDidMount() {
        let fontName1 = 'AirbnbCerealBlack'
        let fontName2 = 'AirbnbCerealBold'
        let fontName3 = 'AirbnbCerealBook'
        let fontName4 = 'AirbnbCerealExtraBold'
        let fontName5 = 'AirbnbCerealLight'
        let fontName6 = 'AirbnbCerealMedium'
        GlobalFont.applyGlobal(fontName1)
        GlobalFont.applyGlobal(fontName2)
        GlobalFont.applyGlobal(fontName3)
        GlobalFont.applyGlobal(fontName4)
        GlobalFont.applyGlobal(fontName5)
        GlobalFont.applyGlobal(fontName6)   //<------- Added font family golbally 
     }

    render() {
        return (
            <Container style={{backgroundColor:'#F5F5F5'}}>

                <Header style={{backgroundColor:'white', height: 80}}>
                    <Body style={{paddingLeft:20}}>
                        <Text style={{fontFamily: "AirbnbCerealBlack", fontSize: 25}}>
                            Mudaris
                        </Text>
                    </Body>
                    <Right>
                        <Text style={{fontFamily: "AirbnbCerealLight", fontSize: 17}} onPress={()=>{Actions.BookSubjectScreen()}}>
                            BACK
                        </Text>
                    </Right>
                </Header>

                <Content padder>
                    <Text style={{textAlign: "center", height: 50, fontFamily: "AirbnbCerealBlack", fontSize: 40, marginTop: 20}}>
                        {this.props.subject}
                    </Text>
                    <Text style={{textAlign: "center", height: 40, fontFamily: "AirbnbCerealBold", fontSize: 20, marginTop: 50}}>
                        Choose Your Preferred Tutor
                    </Text>
                    <Button block last style={{marginTop: 70, backgroundColor:'#59C9A5'}} onPress={()=>{Actions.TutorProfileScreen({tutor:'Hazirah Haris'});}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Hazirah Haris</Text>
                    </Button>
                    <Button block last style={{marginTop: 10, backgroundColor:'#59C9A5'}} onPress={()=>{Actions.TutorProfileScreen({tutor: 'Wan Maisarah'});}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Wan Maisarah</Text>
                    </Button>
                    <Button block last style={{marginTop: 10, backgroundColor:'#59C9A5'}} onPress={()=>{Actions.TutorProfileScreen({tutor:'Yuseri Yunus'});}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Yuseri Yunus</Text>
                    </Button>
                    <Button block last style={{marginTop: 10, backgroundColor:'#59C9A5'}} onPress={()=>{Actions.TutorProfileScreen({tutor:'Hilmi Firdaus'});}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Hilmi Firdaus</Text>
                    </Button>
                </Content>

                <Footer style={{height: 80}}>
                    <FooterTab style={{backgroundColor:'white'}}>
                        <Button vertical onPress={()=>{Actions.HomeScreen();}}>
                            <Icon style={{color:'#F0736A', paddingBottom:7}} name="home-outline" size={25}/>
                            <Text style={{color:'#F0736A', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Home</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.ChatScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="chatbubbles-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Chat</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.BookStatusScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="notifications-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Status</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.ProfileScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="person-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}