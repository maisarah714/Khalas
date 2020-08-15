import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab, Picker, List, ListItem, Card, CardItem, Thumbnail, Badge} from 'native-base';
import { Alert, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableNativeFeedbackBase } from 'react-native';

export default class SessionScreen extends Component {

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
                        Session
                    </Text>


                    {/* Session Request */}
                    <View>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Thumbnail source = {require('./../../../assets/img/wanmai.jpg')} />
                                    <Badge><Text>3</Text></Badge>
                                    <View style={{marginLeft: 20}}>
                                        <Text style={{textAlign: "left", fontFamily: "AirbnbCerealBold", fontSize: 20}} onPress={()=>{Actions.TutorViewRequestListScreen()}}>
                                            Session Request
                                        </Text>
                                        <Text style={{textAlign: "left", fontFamily: "AirbnbCereal"}}> Approve or ignore</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>
                    </View>

                    {/* Upcoming Session */}
                    <View>
                        <Text style={{textAlign: "left", height: 50, fontFamily: "AirbnbCerealBold", fontSize: 20, marginTop: 50, marginLeft:20}}>
                            Upcoming Session
                        </Text>

                        <Content>
                            <Card>
                                <CardItem>
                                    <Thumbnail source = {require('./../../../assets/img/wanmai.jpg')} />
                                    <View style={{marginLeft: 20}}>
                                        <Text style={{fontFamily: "AirbnbCerealBold", marginLeft:20, fontSize: 20}}>Wan Maisarah</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Level of Study: UPSR</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Subject: Mathematics</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Date: 20/8/2020 (Tuesday)</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Time: 9.00AM</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Venue: Perpustakaan Awam</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>
                    </View>

                    <View>
                        <Text style={{textAlign: "left", height: 50, fontFamily: "AirbnbCerealBold", fontSize: 20, marginTop: 50, marginLeft:20}}>
                            Completed
                        </Text>

                        <Content>
                            <Card>
                                <CardItem>
                                    <Thumbnail source = {require('./../../../assets/img/wanmai.jpg')} />
                                    <View style={{marginLeft: 20}}>
                                        <Text style={{fontFamily: "AirbnbCerealBold", marginLeft:20, fontSize: 20}}>Wan Maisarah</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Level of Study: UPSR</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Subject: Mathematics</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Date: 20/8/2020 (Tuesday)</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Price: RM30</Text>
                                        <Text style={{fontFamily: "AirbnbCereal", marginLeft:20}}>Duration: 2 hours</Text>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>
                        {/* <Image style={{width:50, height:50}} source={{uri: require('./../../../assets/img/wanmai.jpg')}}/> */}
                    </View>

                    <List>
                        <ListItem>
                            {/* <View style={{justifyContent: "flex-start"}}>
                                <Text style={{textAlign: "left", fontFamily: "AirbnbCereal", marginLeft:20}}>Name: Wan Maisarah</Text>
                                <Text style={{textAlign: "left", fontFamily: "AirbnbCereal", marginLeft:20}}>Level of Study: UPSR</Text>
                                <Text style={{textAlign: "left", fontFamily: "AirbnbCereal", marginLeft:20}}>Subject: Mathematics</Text>
                                <Text style={{textAlign: "left", fontFamily: "AirbnbCereal", marginLeft:20}}> Date: 20/8/2020 (Tuesday)</Text>
                            </View> */}

                        </ListItem>
                    </List>
                    

                    

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