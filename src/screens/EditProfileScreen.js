import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab, Picker, List, ListItem  } from 'native-base';
import { Alert, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

export default class EditProfileScreen extends Component {

    constructor(){
        super();
        this.state={
           name: null,
           age: null,
           education: null, 
        }
    }

    setName = (value) =>{
        this.setState({name: value});
    }
    setAge = (value) =>{
        this.setState({age: value});
    }
    setEducation = (value) =>{
        this.setState({education: value});
    }

    saveProfile = () => {
        let name = this.state.name;
        let age = this.state.age;
        let education = this.state.education;

        return Actions.ProfileScreen();
    }

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
                        <Text style={{fontFamily: "AirbnbCerealLight", fontSize: 17}} onPress={()=>{Actions.HomeScreen()}}>
                            BACK
                        </Text>
                    </Right>
                </Header>

                <Content padder>
                    <Text style={{textAlign: "center", height: 50, fontFamily: "AirbnbCerealBlack", fontSize: 40, margin: 20}}>
                        Edit Profile
                    </Text>
                    
                    <Form>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>Name</Label>
                            <Input onChangeText={this.setName} value={this.state.name} />
                        </Item>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>Age</Label>
                            <Input onChangeText={this.setAge} value={this.state.age} />
                        </Item>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>Education</Label>
                            <Input onChangeText={this.setEducation} value={this.state.education} />
                        </Item>
                    </Form>

                    <Button block last style={{margin: 50, backgroundColor:'#59C9A5'}} onPress={()=>{this.saveProfile}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Edit</Text>
                    </Button>

                </Content>

                <Footer style={{height: 80}}>
                    <FooterTab style={{backgroundColor:'white'}}>
                        <Button vertical onPress={()=>{Actions.HomeScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="home-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Home</Text>
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
                            <Icon style={{color:'#F0736A', paddingBottom:7}} name="person-outline" size={25}/>
                            <Text style={{color:'#F0736A', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}